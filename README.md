# 1 уровень (необходимый минимум)

## React

<li> Пишем функциональные компоненты c хуками в приоритете над классовыми. +
<li> Есть четкое разделение на умные и глупые компоненты. +
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/pages/notFound/NotFound.js">NotFound</a>, 
<a href="https://github.com/aKirpichenok/aston-project/blob/main/src/store/requireAuth.js">RequireAuth</a>) +
<li> Есть рендеринг списков. 
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/output/characters/Characters.js">Characters</a>,
<a href="https://github.com/aKirpichenok/aston-project/blob/main/src/pages/history/History.js">History</a> ) +
<li> Реализована хотя бы одна форма.
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/forms/FormSign.js">FormSign</a>,
<a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/forms/SearchForm.js">SearchForm</a> ) +
<li> Есть применение Контекст API. 
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/index.js">authProvider</a> ) +
<li> Есть применение предохранителя. 
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/ErrorBoundary.js">ErrorBoundary</a> ) +
<li> Есть хотя бы один кастомный хук.  
( <a href="https://github.com/aKirpichenok/aston-project/tree/main/src/hooks">hooks</a> ) + 
<li> Хотя бы несколько компонентов используют PropTypes.  
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/output/characters/Characters.jsx">Characters</a>, 
<a href="https://github.com/aKirpichenok/aston-project/blob/main/src/components/forms/FormSign.js">FormSign</a> )  +
<li> Поиск не должен триггерить много запросов к серверу.  Поиск по нажатию кнопки. +

## Redux

<li> Используем Modern Redux with Redux Toolkit .  
( <a href="https://github.com/aKirpichenok/aston-project/tree/main/src/store">Store</a> )  + 
<li> Используем слайсы. 
( <a href="https://github.com/aKirpichenok/aston-project/tree/main/src/store/slices">Slices</a> )  + 
<li> Есть хотя бы одна кастомная мидлвара.
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/store/customMiddleware.js">customMiddleware</a> )  +
<li> Используется RTK Query. 
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/store/userAPI.js">userAPI</a> )   +
<li> Используется Transforming Responses.
( <a href="https://github.com/aKirpichenok/aston-project/blob/main/src/store/userAPI.js">userApi</a> )   + 
