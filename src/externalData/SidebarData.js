import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import { MdEventBusy } from 'react-icons/md'
import { BiCog, BiSupport } from 'react-icons/bi'

export const SidebarData = [
  {
    title: 'Início',
    path: '/',
    icon: <FaIcons.FaHome />,
    bg: '#ffdb46',
    color: 'black',
    colorScheme: 'yellow'
  },
  {
    title: 'Velocidade',
    path: '/speed',
    icon: <IoIcons.IoSpeedometerOutline />,
    bg: '#5263f9',
    color: 'white',
    colorScheme: 'blue'
  },
  {
    title: 'Calendário',
    path: '/calendar',
    icon: <FaIcons.FaCalendarAlt />,
    bg: 'none',
    color: '#a0a0a0'
  },
  {
    title: 'Painel do Investidor',
    path: '/team',
    icon: <FaIcons.FaHandHoldingUsd />,
    bg: 'none',
    color: '#a0a0a0'
  },
  {
    title: 'Comunidade',
    path: '/users',
    icon: <BsIcons.BsPeople />,
    bg: 'none',
    color: '#a0a0a0'
  },
  {
    title: 'Cancelamentos',
    path: '/cancel',
    icon: <MdEventBusy />,
    bg: 'none',
    color: '#a0a0a0'
  },
  {
    title: 'Suporte',
    path: '/support',
    icon: <BiSupport />,
    bg: 'none',
    color: '#a0a0a0'
  },
  {
    title: 'Configurações',
    path: '/settings',
    icon: <BiCog />,
    bg: 'none',
    color: '#a0a0a0'
  },
]