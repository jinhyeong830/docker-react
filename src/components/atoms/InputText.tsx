import { UseFormRegisterReturn } from 'react-hook-form';
import { classJoin } from '../../utils/utils';

interface Props {
  id: string;
  className?: string;
  placeholder?: string;
  type: string; // text, password, email
  register: UseFormRegisterReturn; // register 안에서 name, onChange 제어가능
}

export default function InputText({ id, className, register, placeholder, type }: Props) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={classJoin(className || '', 'bg-white rounded-md py-2 px-3 outline-none')}
      {...register}
    />
  );
}
