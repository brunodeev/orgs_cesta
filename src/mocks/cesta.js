import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
    top: {
        title: 'Detalhe da Cesta',
    },
    details: {
        name: 'Cesta de Verduras',
        farmName: 'Rancho Sta. Cecília',
        farmImage: logo,
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        price: 'R$ 82,90',
        button: 'Comprar',
    },
    items: {
        title: 'Itens da Cesta',
        list: [
            {
                itemName: 'Tomate',
                itemImage: tomate,
            },
            {
                itemName: 'Brócolis',
                itemImage: brocolis,
            },
            {
                itemName: 'Batata',
                itemImage: batata,
            },
            {
                itemName: 'Pepino',
                itemImage: pepino,
            },
            {
                itemName: 'Abóbora',
                itemImage: abobora,
            },
        ],
    },
};

export default cesta;