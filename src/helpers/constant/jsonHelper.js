import BreakfastIcon from '../../assets/svg/categoriesAssets/breakfast.svg'
import EggsIcon from '../../assets/svg/categoriesAssets/eggs.svg'
import MeatIcon from '../../assets/svg/categoriesAssets/meat.svg'
import FruitsIcon from '../../assets/svg/categoriesAssets/fruits.svg'
import VegetableIcon from '../../assets/svg/categoriesAssets/vegetable.svg'
import MilkIcon from '../../assets/svg/categoriesAssets/milk.svg'

export const ProductApi=[

    {
        id:0,
        ProductName:'Schweppes Original Soda Water',
        ProductQuantity:'300 ml',
        ProductMrp:'₹60',
        images:{
            image1:require('../../assets/images/img16.png'),
            image2:require('../../assets/images/img16.png')
        }
    },
    {
        id:1,
        ProductName:'Real Fruit Power Pineapple Juice',
        ProductQuantity:'1L',
        ProductMrp:'₹120',
        images:{
            image1:require('../../assets/images/img14.png'),
            image2:require('../../assets/images/img15.png')
        }
    },
    {
        id:2,
        ProductName:'Red Bull Energy Drink (250 ml)',
        ProductQuantity:'250 ml',
        ProductMrp:'₹120',
        images:{
            image1:require('../../assets/images/img13.png'),
            image2:require('../../assets/images/img13.png')
        }
    },
    {
        id:3,
        ProductName:'RiteBite Max Protein Daily Protein Bar (Assorted)',
        ProductQuantity:'6 x 50g',
        ProductMrp:'₹388',
        images:{
            image1:require('../../assets/images/img12.png'),
            image2:require('../../assets/images/img12.png')
        }
    },
    {
        id:4,
        ProductName:'La Carne Cheese Chicken Sausage',
        ProductQuantity:'500g',
        ProductMrp:'₹318',
        images:{
            image1:require('../../assets/images/img10.png'),
            image2:require('../../assets/images/img11.png')
        }
    },
    {
        id:5,
        ProductName:'MyFitness Chocolate Crunchy Peanut Butter',
        ProductQuantity:'510g',
        ProductMrp:'₹229',
        images:{
            image1:require('../../assets/images/img8.png'),
            image2:require('../../assets/images/img8.png')
        }
    },
    {
        id:6,
        ProductName:'Mille High Protein Chocolate Oatmeal',
        ProductQuantity:'400g',
        ProductMrp:'₹229',
        images:{
            image1:require('../../assets/images/img7.png'),
            image2:require('../../assets/images/img7.png')
        }
    },
    {
        id:7,
        ProductName:'Amul Taaza Homogenised Toned Milk',
        ProductQuantity:'1L',
        ProductMrp:'₹71',
        images:{
            image1:require('../../assets/images/img3.png'),
            image2:require('../../assets/images/img4.png')
        }
    },
    {
        id:8,
        ProductName:'English Oven Zero maida 100% Atta Bread',
        ProductQuantity:'400g',
        ProductMrp:'₹55',
        images:{
            image1:require('../../assets/images/img5.png'),
            image2:require('../../assets/images/img6.png')
        }
    },
    {
        id:9,
        ProductName:'Amul Gold Full Cream Fresh Milk',
        ProductQuantity:'500ml',
        ProductMrp:'₹34',
        images:{
            image1:require('../../assets/images/img2.png'),
            image2:require('../../assets/images/img1.png')
        }
    },
]


export const Categories=[
    {
        id:0,
        categoryName:'Breakfast',
        imageCategory:<BreakfastIcon/>
    },
    {
        id:1,
        categoryName:'Meat',
        imageCategory:<MeatIcon/>
    },
    {
        id:2,
        categoryName:'Fruits',
        imageCategory:<FruitsIcon/>
    },
    {
        id:3,
        categoryName:'Milk',
        imageCategory:<MilkIcon/>
    },
    {
        id:4,
        categoryName:'Eggs',
        imageCategory:<EggsIcon/>
    },
    {
        id:5,
        categoryName:'Vegetable',
        imageCategory:<VegetableIcon/>
    },
]

export const MostRecentItems=[
    {
        itemName:'Milk,curd & Panner',
        imageStack:{
            image1:require('../../assets/images/img3.png'),
            image2:require('../../assets/images/img2.png'),
            image3:require('../../assets/images/img17.png'),
            image4:require('../../assets/images/img18.png'),
        }
    },
    {
        itemName:'Vegetable',
        imageStack:{
            image1:require('../../assets/images/img22.png'),
            image2:require('../../assets/images/img23.png'),
            image3:require('../../assets/images/img24.png'),
            image4:require('../../assets/images/img25.png'),
        }
    },
    {
        itemName:'Fruits',
        imageStack:{
            image1:require('../../assets/images/img19.png'),
            image2:require('../../assets/images/img20.png'),
            image3:require('../../assets/images/img21.png'),
            image4:require('../../assets/images/img26.png'),
        }
    },
]