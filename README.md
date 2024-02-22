https://docs.google.com/document/d/1jmj9c_yWLTTRT2ptBpyvNWPLCZpkj2UEESTxskw-i_w/edit


https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=1-122&mode=design&t=Vn77NnwO9ipkQDrG-0

ROOT_URL = https://project-fe-vxeu.onrender.com/products/all

===========================
npm moduls
===========================
instal router dom
npm i react-router-dom

установка библиотеки валидации форм
npm i react-hook-form

//======================== icon
Установите пакет в каталог проекта командой:

// через npm
npm install @material-ui/icons

npm install --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesomeotation  from '@material-ui/icons';
//---------------------------------

npm i react-router-dom

npm i redux react-redux

npm i @reduxjs/toolkit


asinchronschina
npm i redux-thunk

Библиотека для localstorage
npm i redux-persist

store/index.js => 

index.js => 

npm install --save react-breadcrumbs //error

npm install --save react-breadcrumbs@1.6.x

====================================
Установка иконок

npm install react-icons --save
======================================= 
============= Установка бекенд
=======================================
скачать, распаковать, запустить по инструкции в отдельном окне и оставить работать

============
Map
============
https://www.maps.ie/create-google-map/

Starta Institute by Tel-Ran

<div style="width: 100%"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=+(telran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe></div>

============
REDUCER
============
category
procucts
product
cart
modal ?

home{form valid 
name 3 symbol
tel length
mail valid 

button => modalWin { Name, tel, emaail sendOk }
}


grid tamplateColumn


24.01.2024 выравнивание по центру всего содержимого;
исправление пути discount;
добавление хлебных крошек

1.02.2024 add products card disine 
- dobav render cartochek, filter(logica), otmena vsplutia 


5.02.2024 
1 page for all products, sale, categories =>  CategoriesPage({type})

7.02 filter
get normal all products
    return {category: '', 
            products: arr, 
            count: 1,
            from: 0,
            to: Infinity,
            isSale: false,
            sortBy: 'default'
        }

9.02 filter is working 
    {category: '', 
        products: arr.map(el => ({...el, isShowFrom: true, isShowTo: true, isShowSale: true })),  
        count: 1,
        from: 0,
        to: Infinity,
        isSale: false,
        sortBy: 'default'
        }

10.02.2024 
rest: 
Breadcrumb,
ProductItem,
Cart => emptyStyle, card Style, BtnControl, btnOrder(logic form)
ModalWindow => close 

LS, Adaptive

11.02.2024
rest: 
Breadcrumb,
ProductItem,
Cart => emptyStyle, card Style, BtnControl, btnOrder(logic form)
ModalWindow => close 

LS, Adaptive
useLocation() opredelenie navigacii path navMenu active Menu green 

13.02.2024
add liveSearch by Title. 
Cart => emptyStyle, card Style, BtnControl, 
ModalWindow => close 
ProductItem,

rest:
cart => btnOrder(logic form)
LS, Adaptive
useLocation() opredelenie navigacii path navMenu active Menu green 

20.02/24
logic page: products of category.