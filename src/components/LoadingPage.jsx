//Ant Desing
import { Affix, Spin } from 'antd';

export function LoadingPage() {
  return(
    <Affix  className='absolute z-10 top-[45%] left-[43%]'>
      <Spin spinning  size='large' tip="Loading" className='scale-150 '/>
    </Affix>
  )
}

