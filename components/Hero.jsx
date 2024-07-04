import Link from "next/link";
import { Button } from "./ui/button";
import { Download,Send } from "lucide-react";

import{
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
    RiArrowDownLine,
}from 'react-icons/ri';

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[87vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">Full-Stack Web developer</div>
                    <h1 className="h1 mb-4">Hi, my name is Stephanie Céspedes</h1>
                    <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself,my vocational journey and what I engage in professionally. </p>
                    {/* buttons */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href='/contact'>
                            <Button className="gap-x-2">
                                Contact me <Send size={18}/>
                            </Button>
                        </Link>
                            <Button variant="secondary"className="gap-x-2">
                                Download CV <Download size={18}/>
                            </Button>
                    </div>
                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[27px] hover:text-primary transition-all' />
                </div>
                {/* image*/}
                <div className="hidden xl:flex relative ">
                    {/* Badge */}
                    <Badge 
                    containerStyles='absolute top-[24%] -left-[6rem]'
                    icon={<RiBriefcase4Fill />} 
                    endCountNum={1} 
                    badgeText='Year of experience'
                    />
                    {/* Badge 2 */}
                    <Badge 
                    containerStyles='absolute top-[75%] -left-[1rem]'
                    icon={<RiTodoFill />} 
                    endCountNum={6} 
                    endCountText='k'
                    badgeText='Finished projects'
                    />
                    {/* Badge 3 */}
                    <Badge 
                    containerStyles='absolute top-[45%] -right-8'
                    icon={<RiTeamFill/>} 
                    endCountNum={6} 
                    endCountText='k'
                    badgeText='Happy clients'
                    />                    
                    <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                <DevImg containerStyles="bg-hero_shape w-[510px] h-[486px] bg-no-repeat relative bg-bottom " imgSrc='/hero/developer-1.png'/>
                </div>
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}

export default Hero