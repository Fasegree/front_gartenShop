export default async function postData(data, isHomePage, action) {
    try {
        const response = await fetch(isHomePage ? 'http://localhost:3333/sale/send' : 'http://localhost:3333/order/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          action && action();
          // alert('Ваш купон успешно отправлен!');
          console.log(response);
          console.log(data);
          return response;
        } else {
          alert('Произошла ошибка при регистрации пользователя!');
        }
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
}
