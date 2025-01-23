import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/fontSize';
import { COLORS } from '../helpers/constant/colors';
import Button from './button';


const OtpInputComponent = ({
  otpLength = 4, // Number of OTP digits
  title = 'Enter the OTP sent to your phone', // Screen title
  buttonText = 'Submit', // Button text
  onSubmit = () => {}, // Callback function when OTP is submitted
  errorMessage = 'Please fill all the fields.', // Default error message
  inputStyle = {}, // Style for OTP inputs
  containerStyle = {}, // Style for the main container
  buttonStyle = {}, // Style for the submit button
  buttonTextStyle = {}, // Style for button text
  titleStyle = {}, // Style for the title
  timerDuration = 60, // Timer duration in seconds
  onResendOtp = () => {}, // Callback when OTP is resent
}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(timerDuration); // Initialize timer
  const timerRef = useRef(null);

  useEffect(() => {
    // Start the timer when the component is mounted
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timerRef.current);
  }, [timer]);

  const handleInputChange = (text, index) => {
    if (text.length > 1) return; // Restrict input to one character
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input if filled
    if (text && index < otp.length - 1) {
      const nextInput = inputs[index + 1];
      nextInput?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== otpLength) {
      setError(errorMessage);
    } else {
      setError('');
      onSubmit(enteredOtp);
    }
  };

  const handleKeyPress = (key, index) => {
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      const previousInput = inputs[index - 1];
      previousInput?.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = ''; // Clear the previous input
      setOtp(newOtp);
    }
  };

  const handleResendOtp = () => {
    clearInterval(timerRef.current);
    setTimer(timerDuration); // Reset timer
    onResendOtp(); // Trigger resend OTP action
  };

  const inputs = [];

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>

      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs[index] = ref)} // Track refs for inputs
            style={[styles.input, inputStyle, error && { borderColor: COLORS.errorColor }]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleInputChange(text, index)}
            value={otp[index]}
            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
          />
        ))}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Button
       btnTitle={buttonText}
        additionalStyle={[styles.buttonStyle, buttonTextStyle]}
        onPress={handleSubmit}
      />

      {/* Timer Section */}
      <View style={styles.timerContainer}>
        {timer > 0 ? (
          <Text style={styles.timerText}>
            Resend OTP in {timer}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OtpInputComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 26,
  },
  title: {
    fontSize: FONT_SIZE.h16,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    textAlign: 'center',
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    width: 52,
    height: 52,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: COLORS.lightBorderWithOpacity,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: FONT_SIZE.h16,
    backgroundColor: COLORS.white,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
  },
  error: {
    color: COLORS.errorColor,
    marginBottom: 20,
    fontSize: FONT_SIZE.h14,
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
  },
  timerContainer: {
 
    alignItems: 'center',
  },
  timerText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: COLORS.secondaryColor,
  },
  resendText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: COLORS.errorColor,
    textDecorationLine: 'underline',
  },
});
