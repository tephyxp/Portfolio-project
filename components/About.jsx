import DevImg from "@/components/DevImg";
import Image from "next/image";
import {Tabs,TabsContent,TabsList,TabsTrigger}from '@/components/ui/tabs';
import{
    User2,
    MailIcon,
    MapPin,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
}from 'lucide-react';
import { IconBase } from "react-icons";

const infoData = [
    {
        icon:<User2 size={20} />,
        text:'Stephanie Céspedes',
    },
    {
        icon:<PhoneCall size={20} />,
        text:'+34 697 214 536',
    },
    {
        icon:<MailIcon size={20} />,
        text:'lindacespedesdev@gmail.com',
    },
    {
        icon:<Calendar size={20} />,
        text:'Born on 06 march,1990',
    },
    {
        icon:<GraduationCap size={20} />,
        text:'Fullstack development Bootcamp',
    },
    {
        icon:<MapPin size={20} />,
        text:'Barcelona, Spain',
    },
]
const qualificationData = [
    {
        title: "education",
        data:[
            {
                School: 'Factoría F5',
                Qualification:'Full-Stack web developer',
                Date: 'October 2023 - April 2024'

            },
            {
                School: 'Merit School',
                Qualification:'Level 3 Certificate in Web App Development (Equivalent to a Higher Degree in web Application development)',
                Date: 'May 2023 - December 2024'

            },              {
                University: 'University of Barcelona',
                Qualification:'Bachelor in Tourism Management',
                Years: '2011 - December 2015'

            },

        ]
    },
    {
        title: "Professional Experience",
        data:[
            {
                Company: 'Jointure',
                Qualification:'Full-Stack web developer',
                Date: 'March 2024 - April 2024'

            },
            {
                Company: 'Factoría F5',
                Qualification:'Front-end web developer (mentor)',
                Date: 'November 2024 - December 2024'

            },              
            {
                Company: 'Inkor Formación',
                Qualification:'Internship Placement coordinator',
                Years: '2023 - 2024'

            },
            {
                Company: 'Audioguiarte - Basílica de la Sagrada Familia ',
                Qualification:'Visitor Assistance',
                Years: '2022'

            },            

        ]
    }
]
const skillData =[
    {
        title:'skills',
        data:[
            {
                name: 'HTML,CSS',
            },
            {
                name: 'Front-end development',
            },
            {
                name: 'Javascript,PHP',
            },
            {
                name: 'Back-end development',
            },
        ]

    },
    {
        title:'Tools',
        data:[
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/postman.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/trello.svg',
            },
        ]

    }
]

const About = () => {
    const getData =(arr,title) => {
        return arr.find((item)=>item.title === title);
    };
    return (<section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc='/about/developer.png' />
                </div>
                {/* Tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* Tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* Personal */}
                            <TabsContent value="personal">
                                <div>
                                    <h3 className="h3 mb-4">Focused on web applications service quality</h3>
                                    <p className="subtitle max-w-xl max-auto xl:mx-8">I specialize in crafting intuitive websites with cutting-edge technology,delivering dynamic and angaging user experiences</p>
                                </div>
                            </TabsContent>
                            <TabsContent value="qualifications">qualifications info</TabsContent>
                            <TabsContent value="skills">skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
        </section>)
}

export default About