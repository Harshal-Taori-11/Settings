import img1 from '../images/img1.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/IMG2.jpg';

export default function ImgSlogan(){
    return(
        <div className='flex flex-col w-3/5 mt-10'>
            <div className='flex flex-row justify-evenly items-center'>
                <div className='w-1/2 flex justify-center items-center'>
                    <img src= {img1} alt="img1" className="h-auto max-w-xs h-full object-cover"></img>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <h1 className='text-xl font-normal font-serif text-cyan-500'>When 'i' is replaced with 'we' Even 'illness' Becomes 'Wellness'.</h1>
                </div>
            </div>

            <div className='flex flex-row justify-evenly items-center'>
                <div className='w-1/2 flex justify-center items-center'>
                    <h1 className='text-xl font-normal font-serif text-cyan-500'>As you get older, you really just want to be surrounded by good people. People that are good for you, good to you, and good for your soul.</h1>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <img src= {img4} alt="img4" className="h-auto max-w-xs object-cover"></img> 
                </div>    
            </div>

            <div className='flex flex-row justify-evenly items-center '>
                <div className='w-1/2 flex justify-center items-center'>
                    <img src= {img3} alt="img3" className="h-auto max-w-xs h-full object-cover"></img>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <h1 className='text-xl font-normal font-serif text-cyan-500'>You always took care of me when I was sick-now it's my turn to take care of you.</h1> 
                </div>  
            </div>  
        </div>
    );
}