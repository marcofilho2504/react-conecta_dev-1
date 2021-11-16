import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/como-melhorar-seu-codigo-javascript').reply(200, {
    posts: [{
        id: 1,
        title: 'Como melhorar seu codigo JAVASCRIPT(ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        slug: 'como-melhorar-seu-codigo-javascript',
        date: moment().subtract(1, 'day').toDate().getTime(),
        author: {
            id: 1,
            name: 'Marco Aurélio',
            avatar: 'Pasta pessoal/imagens/Captura de tela de 2021-10-13 14-59-29.png',
        },
        tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
        image: 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post1.png',
        likes: 10,
        comments: 30
    }]
});

mock.onGet('/api/feed').reply(200, {
    posts: [
        {
            id: 1,
            title: 'como melhorar seu codigo javascript(eslint + prettier + editorconfig) | dicas e truques #02',
            slug: 'como-melhorar-seu-codigo-javascript',
            date: moment().subtract(1, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: 'Marco Aurélio',
                avatar: 'Pasta pessoal/imagens/Captura de tela de 2021-10-13 14-59-29.png',
            },
            tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
            image: 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post1.png',
            likes: 10,
            comments: 30
        },
        {
            id: 2,
            title: 'como migrar para react hooks | tips & tricks - react.js #01',
            slug: 'como-migrar-para-react-hooks',
            date: moment().subtract(1, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: 'Marco Aurélio',
                avatar: 'Pasta pessoal/imagens/Captura de tela de 2021-10-13 14-59-29.png',
            },
            tags: ['react.js', 'javascript'],
            image: 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post2.png',
            likes: 5,
            comments: 1
        },
    ],
});