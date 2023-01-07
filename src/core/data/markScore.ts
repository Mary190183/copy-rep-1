export const taskMark = `
Самооценка 93.5 + {} + {} + 40 + {} + 10 = 
(+/-)1. Страница товаров с фильтрами (максимальный балл - 120) 102.5
2. Страница корзины выбранных товаров (максимальный балл - 60).
3. Модальное окно оформления(покупки) выбранных товаров (максимальный балл - 50).
(+/-)4. Страница с описанием товара (максимальный балл - 40).
(+/-) 5. Header, содержащий кол-во добавленных в корзину товаров и общую сумму покупок (максимальный балл - 20).
+6. Страница 404 (максимальный балл - 10).10
`;
console.log(taskMark);
console.log(`Доделать:
1. 
-- при применении любого фильтра, должны динамически пересчитываться все фильтры и меняться состояние элементов в них. Текстовый поиск также относится к фильтрам. Например, при выборе определенной категории товара, в других фильтрах должно пересчитываться количество найденных товаров с указанием сколько найдено при такой конфигурации фильтров, а также сколько доступно без учета всех применённых фильтров. В случае с dual-slider должен меняться их состояние-диапазон. (см. демо) 
-- Реализовано переключение вида найденных продуктов (вид карточка и список) +10  (0) = 0
-- Доделать кнопку сброса фильтрова
-- изменение вида кнопки покупки товара на карточку
2. 
3.
4. 
-- перепроверить дубликаты фото, добавить вторую фото, где 1
-- поправить стиль кнопки при добавлении в корзину
5.
-- Header содержит общую сумму покупок +10
7. 
-- футер
`);
const ItemsPage = `
${35 + 20 + 15 + 0 + 10 + 8.5 + 5 + 7.5} = 100 из 120
1, Реализована фильтрация продуктов +40 (10 + 10 + 10 + 5) = 35
--  присутствуют два блока фильтров, по категории и брэнду/названию, где реализован список с возможностью выбрать конкретную категорию/брэнд. +5 за каждый блок 
+10
-- присутствуют два блока фильтров с ползунками (dual-slider), по диапазонам цены и наличию на складе
 +10
изменение любых фильтров должно добавлять в query-параметры соответствующие данные, для того, чтобы при перезагрузке страницы восстанавливалось текущее состояние страницы с примененными фильтрами
 +10
при применении любого фильтра, должны динамически пересчитываться все фильтры и меняться состояние элементов в них. Текстовый поиск также относится к фильтрам. Например, при выборе определенной категории товара, в других фильтрах должно пересчитываться количество найденных товаров с указанием сколько найдено при такой конфигурации фильтров, а также сколько доступно без учета всех применённых фильтров. В случае с dual-slider должен меняться их состояние-диапазон. (см. демо) 
+5;
  2,Реализована сортировка продуктов +20 (10 + 5 + 5) = 20
-- присутствует возможность сортировки продуктов минимум по 2 критериям, например по цене и рейтингу (от наименьшего к большему и наоборот)
 +10
-- данные сортировки (если применялась) должны быть добавлены в query-параметр адресной строки. При копировании ссылки и открытии в новом окне/перезагрузке страницы, сортировка должна применяться к найденным продуктам 
+5
-- при открытии в новом окне ссылки, которая содержит query-параметр сортировки, блок сортировки должен менять состояние, которое указывает, какая сортировка выбрана 
+5

3, Реализован текстовый поиск по всем данным продуктов +15
-- присутствует input для поиска-фильтрации продуктов по любым данным. Например, поиск должен работать по всем полям продукта 
+5
-- работает одновременно с другими фильтрами
+5
-- добавляется в query-параметры и при перезагрузке страницы восстанавливается
+5

4.Реализовано переключение вида найденных продуктов +10  (0) = 0

5. Реализован роутинг с query-параметрами +10 (10) = 10
-- все примененные фильтра, сортировка, вид отображения продуктов, текстовый поиск содержаться в query-параметрах и при перезагрузке страницы восстанавливают её состояние 
+10

6. Реализованы кнопки сброса и копирования поиска +10 (1.5 + 4 + 3) = 8.5
-- реализована кнопка сброса всех фильтров +3 (0)
-- реализована кнопка копирования в буфер памяти текущего поиска, то есть адресную строку +4
-- кнопка копирования текущего поиска меняет состояние при копировании (как Вы это реализуете - решать Вам, можете сделать как в демо) +3

7. Реализован блок кол-ва найденных товаров +5

8.Поведение карточек найденных товаров +10
-- карточка товара содержит кнопку добавления в корзину. Состояние кнопки меняется при добавлении/удалении, а также восстанавливается если товар был добавлен на других страницах +5
-- должна быть возможность перехода на страницу с описанием товара. Как это реализовать - решать вам. Например, это может быть кнопка, клик по карточке товара и т.д. +5
`;
const items4 = `
5+10+5+5+5+5+10 = 40 из 40
1. Реализованы блоки страницы +30
-- присутствуют "хлебные крошки"
+5
-- реализован блок с фотографиями товара, которые можно увеличивать при клике/наведении. Фотографии не должны содержать дубликаты/повторы
+10
-- реализован блок с полными данными товара (название, категория, описание, цена и т.д.)
 +5
 --присутствует кнопка добавления товара в корзину.
 +5
 --присутствует кнопка быстрой покупки товара
 +5
2,Страница открывается в новом окне по ссылке с id/name товара 
+10

`;
const header = `
10 + 0 = 10 из 20
1. Header содержит корзину товаров +10
-- Присутствует корзина с количеством выбранных товаров
 +5
количество выбранных товаров динамически изменяется при добавлении/удалении товара на всех страницах (корзина, карточка товара, поиск товаров). 
+5
2. Header содержит общую сумму покупок +10
2.  
`;

console.log(`
Развернуто:
1. Страница товаров с фильтрами
${ItemsPage};
2. 
3 
4. Страница товара:
${items4}
`)