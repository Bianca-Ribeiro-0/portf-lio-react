import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Bianca Ribeiro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Bianca-Ribeiro
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheira Full-Stack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
