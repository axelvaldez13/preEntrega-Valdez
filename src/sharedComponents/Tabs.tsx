import styled from 'styled-components'
import theme from '../styles/Theme'

import { TabInterface } from '../utilities/TabController'

interface ITabs {
  sections: TabInterface
}

const TabContainer = styled.div`
  display: flex;
  overflow: scroll;
  > button {
    background: none;
    border: none;
    color: ${theme.color.primary[600]};
    cursor: pointer;
    padding: 16px;
    font: 700 12px/16px 'Montserrat Alternates', sans-serif;
    margin-right: 16px;

    :hover {
      color: ${theme.color.primary[800]};
      transition: 0.5s ease-in-out color;
    }
  }
  .active {
    background: ${theme.color.primary[200]};
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    overflow: none;
  }
`

const Tabs: React.FC<ITabs> = (props: ITabs) => {
  return (
    <TabContainer>
      {props.sections.tabs().map((section, i) => {
        return (
          <button
            key={i}
            className={props.sections.isActiveTab(i) ? 'active' : 'disabled'}
            onClick={(): void => {
              if (!props.sections.isActiveTab(i)) {
                props.sections.setActiveTab(i)
              }
            }}
            title="Tab"
            type="button"
          >
            {section.name}
          </button>
        )
      })}
    </TabContainer>
  )
}

export default Tabs
