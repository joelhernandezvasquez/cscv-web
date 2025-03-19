// import { Metadata, ResolvingMetadata } from 'next';

import { getCourse } from "@/actions/get-course";

interface Props{
    params: {
    slug: string
  }
}

const CoursePage = async({params}:Props) => {

   const {slug} = params;
   const course = await getCourse(slug);
   console.log(course);
   
  return (
  <section>
    <h1>Course Page</h1>
  </section>
  )
}

export default CoursePage