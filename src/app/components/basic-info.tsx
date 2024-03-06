import Image from 'next/image';
import {Separator} from "@/components/ui/separator";
import img from '../../../public/avatar.jpg';

export default function BasicInfo() {
  return (
    <div className="top-0 w-full h-32 p-4 flex justify-between items-center space-x-4 bg-card shadow-[3px_3px_6px_rgba(0,0,0,0.1)]">
      <div className="w-24 h-24 bg-background rounded-md shadow-inner flex items-center justify-center">
        <div className="w-20 h-20 bg-card rounded-sm shadow-md overflow-hidden">
          <Image alt='image' src={img} width='800' height='800' className="rounded-sm"></Image>
        </div>
      </div>
      <div className="grow h-24 flex flex-col">
        <div className="w-full h-12 flex items-center space-x-8">
          <div className="h-12 flex items-center space-x-2">
            <i className="fa-duotone fa-id-card text-xl text-primary w-6 text-center"></i>
            <span className="text-text text-sm font-bold tracking-wide">姓名: 曾振华</span>
          </div>
          <div className="h-12 flex items-center space-x-2">
            <i className="fa-duotone fa-map-location text-xl text-primary w-6 text-center"></i>
            <span className="text-text text-sm font-bold tracking-wide">现居：广东省广州市天河区</span>
          </div>
          <div className="h-12 flex items-center space-x-2">
            <i className="fa-duotone fa-phone-rotary text-xl text-primary w-6 text-center"></i>
            <span className="text-text text-sm font-bold tracking-wide">联系电话：15159069775</span>
          </div>
        </div>
        <Separator className="my-0 h-0.5"/>
        <div className="w-full h-12 flex items-center space-x-8">
          <div className="h-12 flex items-center space-x-2">
            <i className="fa-duotone fa-envelope text-xl text-primary w-6 text-center"></i>
            <span className="text-text text-sm font-bold tracking-wide">邮箱：alien_worm@163.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
