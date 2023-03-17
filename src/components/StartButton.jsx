import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button  } from "antd";

export function StarButton({ favorite, onClick }) {
  const Icon = favorite ? StarFilled : StarOutlined;
  return(
    <Button icon={ <Icon/> } onClick={ onClick } className='flex flex-col justify-center items-center scale-75'/>
  )
}