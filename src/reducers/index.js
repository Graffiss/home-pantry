import milkIcon from '../assets/icons/milk.svg';
import cokeIcon from '../assets/icons/coke.svg';
import cucumberIcon from '../assets/icons/cucumber.svg';
import riceIcon from '../assets/icons/rice.svg';
import lemonIcon from '../assets/icons/lemon.svg';
import onionIcon from '../assets/icons/onion.svg';
import tomatoIcon from '../assets/icons/tomato.svg';
import potatoIcon from '../assets/icons/potato.svg';
import pastaIcon from '../assets/icons/pasta.svg';
import bananaIcon from '../assets/icons/banana.svg';
import appleIcon from '../assets/icons/apple.svg';
import waterIcon from '../assets/icons/water.svg';
import beerIcon from '../assets/icons/beer.svg';
import grapeIcon from '../assets/icons/grape.svg';
import avocadoIcon from '../assets/icons/avocado.svg';

const initialState = {
  items: [
    {
      id: 'f473a00e-ee15-4989-b6db-f4dc1b533229',
      name: 'Mleko',
      amount: 5,
      minAmount: 2,
      category: 'Napoje',
      icon: milkIcon,
    },
    {
      id: 'a354501c-dd2a-4070-a7c1-ac8b27632e9d',
      name: 'Coca-Cola',
      amount: 2,
      minAmount: 1,
      category: 'Napoje',
      icon: cokeIcon,
    },
    {
      id: '7b9e120a-d00f-4d2b-a80e-b5ac3df9e902',
      name: 'Ogórek zielony',
      amount: 3,
      minAmount: 1,
      category: 'Warzywa',
      icon: cucumberIcon,
    },

    {
      id: '7b9e120a-d00f-4d2b-a80e-b5ac38lp231s',
      name: 'Winogrona',
      amount: 10,
      minAmount: 2,
      category: 'Owoce',
      icon: grapeIcon,
    },

    {
      id: 'ddb04c22-94b8-474d-986f-hdi268s733a',
      name: 'Ryż',
      amount: 4,
      minAmount: 2,
      category: 'Suche',
      icon: riceIcon,
    },

    {
      id: 'ddb04c22-94b8-474d-986f-3aabd43caa47',
      name: 'Piwo',
      amount: 6,
      minAmount: 4,
      category: 'Napoje',
      icon: beerIcon,
    },

    {
      id: 'd009a0d3-a287-4752-a5ec-ffd484a762fc',
      name: 'Makaron',
      amount: 3,
      minAmount: 1,
      category: 'Suche',
      icon: pastaIcon,
    },
    {
      id: '45c627a4-14d7-4f48-ac84-795f42867a81',
      name: 'Pomidory',
      amount: 6,
      minAmount: 2,
      category: 'Warzywa',
      icon: tomatoIcon,
    },
    {
      id: '45c627a4-14d7-4f48-ac84-55so21867a81',
      name: 'Awokado',
      amount: 3,
      minAmount: 1,
      category: 'Owoce',
      icon: avocadoIcon,
    },
    {
      id: '5af95c32-15d1-4fba-b2c7-e3413ee90fc5',
      name: 'Ziemniaki',
      amount: 10,
      minAmount: 4,
      category: 'Warzywa',
      icon: potatoIcon,
    },

    {
      id: '5af95c32-15d1-0s8d-b2c7-e3413e85ps36',
      name: 'Woda',
      amount: 8,
      minAmount: 2,
      category: 'Napoje',
      icon: waterIcon,
    },

    {
      id: 'b33cb624-2e4c-4549-a1b4-d30e28fe8b9e',
      name: 'Cebula',
      amount: 1,
      minAmount: 1,
      category: 'Warzywa',
      icon: onionIcon,
    },
    {
      id: '05415a6d-b362-4222-ab5d-4a3279bd4a91',
      name: 'Cytryny',
      amount: 3,
      minAmount: 1,
      category: 'Owoce',
      icon: lemonIcon,
    },
    {
      id: '28139cb6-e10d-49f4-ba3c-872e26766526',
      name: 'Banany',
      amount: 6,
      minAmount: 2,
      category: 'Owoce',
      icon: bananaIcon,
    },
    {
      id: 'b9bb6502-6db9-40f5-a7e4-20fc948fc8cd',
      name: 'Jabłka',
      amount: 3,
      minAmount: 3,
      category: 'Owoce',
      icon: appleIcon,
    },
  ],

  item: {
    id: 0,
    name: '',
    amount: 0,
    minAmount: 0,
    category: '',
    icon: '',
  },
  modalOpen: false,
  editMode: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case 'EDIT_ITEM':
      return {
        ...state,
        item: [...state.items.filter((item) => item.id === action.payload.id)][0],
      };

    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    default:
      return state;
  }
};

export default rootReducer;
