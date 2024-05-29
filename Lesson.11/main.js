//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function allCarts() {
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(res => {
            res.carts.forEach((item) => { //рухаємось по всіх обєктах
                let mainUl = document.createElement('ul');
                // console.log(item);
                for (let cart in item) { //рухаємось по внутріщнім головним обєктам
                    // console.log(cart, item[cart]);
                    let middleLi = document.createElement('li');
                    if (cart !== 'products') {
                        middleLi.innerHTML = `${cart}: ${item[cart]}`
                    } else {
                        middleLi.innerHTML = 'products:';
                        let productsUl = document.createElement('ul');
                        for (let product of item['products']) { // рухамось по продуктам
                            for (let subject in product) {
                                let innerLi = document.createElement('li');
                                innerLi.innerHTML = `${subject}: ${product[subject]}`;
                                productsUl.appendChild(innerLi);
                                middleLi.appendChild(productsUl);
                                // console.log(productsUl);
                            }
                        }
                    }
                    mainUl.appendChild(middleLi)
                }
                document.body.appendChild(mainUl);
            });
        });
}

// allCarts(); //uncomment

//- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

function receipt() {
    fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(res => {
            res.recipes.forEach((item) => {
                let itemDiv = document.createElement('div');
                let receiptName = document.createElement('h3');
                receiptName.innerHTML = item.name;
                itemDiv.appendChild(receiptName);
                let ingredientUl = document.createElement('ul');
                item.ingredients.forEach(ingredient => {
                    let ingredientLi = document.createElement('li');
                    ingredientLi.innerHTML = ingredient;
                    ingredientUl.appendChild(ingredientLi);
                });
                let instructionP = document.createElement('p');
                instructionP.innerHTML = item.instructions;
                itemDiv.appendChild(ingredientUl);
                itemDiv.appendChild(instructionP);
                document.body.appendChild(itemDiv);
            });
        });
}

// receipt(); ////uncomment


