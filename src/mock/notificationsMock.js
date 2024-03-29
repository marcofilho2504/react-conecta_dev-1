import mock from '../utils/mock'
import moment from 'moment';

mock.onGet('api/notifications').reply(200, {
    notifications: [
        {
            id: '5e8883f1b51cc1956a5a1ec0',
            title: 'Novas avaliações recebidas',
            description: 'Voce recebeu 1 nova avaliação',
            type: 'reviews',
            createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime()
        },
        {
            id: '5e8883f7ed1486d665d8be1e',
            title: 'Novos comentarios recebidos',
            description: 'Voce recebeu 1 novo comentario',
            type: 'new_comment',
            createdAt: moment()
            .subtract(1, 'day')
            .toDate()
            .getTime()
        },
        {
            id: '5e8883f7ed1486d665d8be1e',
            title: 'Novos likes recebidos',
            description: 'Voce recebeu 1 novo like',
            type: 'like',
            createdAt: moment()
            .subtract(3, 'days')
            .toDate()
            .getTime()
        },
        {
            id: '5e8883fca0e8612044248ecf',
            title: 'Novos seguidores',
            description: '2 devs começaram a seguir voce',
            type: 'connection',
            createdAt: moment()
            .subtract(3, 'days')
            .toDate()
            .getTime()
        }
    ]
})
