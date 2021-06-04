import { BsPeople } from 'react-icons/bs'
import { FaFileInvoice } from 'react-icons/fa'
import { GoMailRead } from 'react-icons/go'
import { IoTicketOutline } from 'react-icons/io5'

export const HelloSectionData = [
  {
    email: 'jorge@rodrigues.com',
    title: 'Membros online',
    mainVal: '26',
    secundaryVal: '/88',
    icon: <BsPeople size='7em' />
  },
  {
    email: 'jorge@rodrigues.com',
    title: 'Faturas não pagas',
    mainVal: '4',
    secundaryVal: '',
    icon: <FaFileInvoice size='7em'/>
  },
  {
    email: 'jorge@rodrigues.com',
    title: 'Mensagens não lidas',
    mainVal: '2',
    secundaryVal: '',
    icon: <GoMailRead size='7em'/>
  },
  {
    email: 'jorge@rodrigues.com',
    title: 'Seus ingressos',
    mainVal: '6',
    secundaryVal: '',
    icon: <IoTicketOutline size='7em'/>
  }
]
