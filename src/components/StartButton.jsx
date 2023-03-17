import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button  } from "antd";

export function StarButton({ favorite, onClick, disabled }) {
  const Icon = favorite ? StarFilled : StarOutlined;
  return(
    <>
      {disabled
        ? <Button disabled icon={ <Icon/> } onClick={ onClick } className='flex flex-col justify-center items-center scale-75'/>
        : <Button  icon={ <Icon/> } onClick={ onClick } className='flex flex-col justify-center items-center scale-75'/>
      }
    </>
  )
}