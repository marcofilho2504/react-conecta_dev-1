import mock from "../utils/mock";

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'marcofilho2504',
        'email': 'marcoaurelio.filho25@gmail.com'
    }
});

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'marcoaurelio.filho25@gmail.com' || password !== '25042004') {
        return [400,  { message: 'Seu email ou senha estão incorretos!!'}]
    }

    const user = {
        id: 1,
        name: 'Marco Aurélio',
        username: 'MarcoAurélio',
        email: 'marcoaurelio.filho25@gmail.com',
        avatar: 'Pasta pessoal/imagens/Captura de tela de 2021-10-13 14-59-29.png'
    }
    
    return [200, { user }]
});