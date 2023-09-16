import WorkItem from "./WorkItem";

const data = [
    {
        year: 2019,
        title: "Web Developer",
        duration: '1 year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2020,
        title: "Web Developer",
        duration: '1 year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2021,
        title: "Web Developer",
        duration: '1 year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
        year: 2022,
        title: "Web Developer",
        duration: '1 year',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
]
const Work = () => {
    return ( 
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]"></h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
        </div>
     );
}
 
export default Work;