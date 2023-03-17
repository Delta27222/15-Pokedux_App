import { Affix, Col } from 'antd';
import { Button  } from "antd";
import { useDispatch } from "react-redux";
import { setPageToShow } from '../slices/uiSlice'
import { StarButton } from './StartButton';

export function ShowPageButton({ showPage, inputValue }) {
  const pc_or_phone_device = () => {
    if (window.innerWidth <= 630) {
      return false
    }else{
      return true
    }
  }
  return(
    <>
      {pc_or_phone_device()
        ? <NormalButton  showPage={showPage} inputValue={inputValue}/>
        : <StartButton showPage={showPage} inputValue={inputValue} />
      }
    </>
  )
}

function NormalButton({ showPage, inputValue}) {
  const dispach = useDispatch();
  const handleShowPage = ()=> {
    if(showPage === "pokemonsList"){
      dispach(setPageToShow('favPokemonsList'))
    }else{
      dispach(setPageToShow('pokemonsList'))
    }
  }
  return (
    <Col className='flex justify-end w-[70%] mt-5'>
      {inputValue.length === 0
        ? <Button onClick={() => handleShowPage()}>{showPage !== 'pokemonsList' ? 'PokemonsList': 'Favorites'}</Button>
        : <Button disabled onClick={() => handleShowPage()}>{showPage !== 'pokemonsList' ? 'PokemonsList': 'Favorites'}</Button>
      }
    </Col>
  );
}
function StartButton({showPage, inputValue}) {
  const dispach = useDispatch();
  const handleShowPage = ()=> {
    if(showPage === "pokemonsList"){
      dispach(setPageToShow('favPokemonsList'))
    }else{
      dispach(setPageToShow('pokemonsList'))
    }
  }
  return (
      <Affix offsetTop={95} style={{ position: 'absolute', right: '40px', top:'95px' }} >
        {inputValue.length === 0
          ? <StarButton  disabled={false}  onClick={() => handleShowPage()}/>
          : <StarButton disabled={true}  onClick={() => handleShowPage()}/>
        }
      </Affix>
  );
}