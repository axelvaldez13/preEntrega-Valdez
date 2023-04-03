import { HeadingTwo } from '@sharedComponents/Fonts'
import styled from 'styled-components'
import theme from '@styles/Theme'

const LoaderContainer = styled.div`
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 999999;
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${theme.color.gray[900]};
  flex: 1;
  top: 0;
  align-items: center;

  .loader {
    animation: rotate 2s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: 20px;
    width: 20px;
  }
  .loader:before {
    animation: ball1 2s infinite;
    background-color: ${theme.color.primary[400]};
    box-shadow: 30px 0 0 ${theme.color.primary[400]};
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 2s infinite;
    background-color: ${theme.color.primary[400]};
    box-shadow: 30px 0 0 ${theme.color.primary[400]};
  }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg) scale(0.8);
      -moz-transform: rotate(0deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(360deg) scale(1.2);
      -moz-transform: rotate(360deg) scale(1.2);
    }
    100% {
      -webkit-transform: rotate(720deg) scale(0.8);
      -moz-transform: rotate(720deg) scale(0.8);
    }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 ${theme.color.primary[400]};
    }
    50% {
      box-shadow: 0 0 0 ${theme.color.primary[400]};
      margin-bottom: 0;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${theme.color.primary[400]};
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 ${theme.color.primary[400]};
    }
    50% {
      box-shadow: 0 0 0 ${theme.color.primary[400]};
      margin-top: -20px;
      -webkit-transform: translate(15px, 15px);
      -moz-transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 ${theme.color.primary[400]};
      margin-top: 0;
    }
  }
`

export const LoaderFixed: React.FC = () => {
  return (
    <LoaderContainer>
      <div className="loader">
        <span></span>
      </div>
      <HeadingTwo>Cargando...</HeadingTwo>
    </LoaderContainer>
  )
}
