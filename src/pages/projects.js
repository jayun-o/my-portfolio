import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import { GithubIcon } from '@/components/Icon'
import project1 from "../../public/images/projects/project-1.jpg"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import project2 from "../../public/images/projects/project-2.png"
import project3 from "../../public/images/projects/project-3.png"
import project4 from "../../public/images/projects/project-4.png"
import project5 from "../../public/images/projects/project-5.png"
import project6 from "../../public/images/projects/project-6.png"
import project7 from "../../public/images/projects/project-7.png"

const FramerImage = motion(Image);

const FeaturedProject = ({type,title,summary,img,link, github}) =>{
    return(
        <article className='relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            '/>
            <Link href={link} target="_blank" 
            className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 
                100vw, (max-width: 1200px) 50vw, 
                50vw" />
            </Link>

            <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='w-full my-2 text-4xl font-bold text-left sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex items-center mt-2'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link> 
                    <Link href={link} target="_blank"
                    className='p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base '
                    >Visit Project</Link> 
                </div>
            </div>
        </article>
    )
}

const Project= ({title,summary,type, img, link, github}) =>{
    return(
        <article className='relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            '/>
            <Link href={link} target="_blank" 
            className='w-full overflow-hidden rounded-lg cursor-pointer'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className='flex flex-col items-start justify-between w-full mt-4'>
                <span className='text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex items-center justify-between w-full mt-2'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link> 
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link> 
                    
                </div>
            </div>
        </article>

    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>TYP | About Page</title>
            <meta name="description" content='my portfolio'/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Project Experiance"
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Wong Wian Yai"
                        img={project1}
                        summary="Built a web application to rate food and restaurants for customers, The system have 2 role as a user(general) and admin for set permission; group project with 3 people using Scrum to get work done, using Katalon Studio as automation testing tool."
                        link="https://docs.google.com/document/d/1XVaNTpitECLu2rwdrRZZAPQDz1wbL7eN/edit?usp=sharing&ouid=100322275286883243874&rtpof=true&sd=true"
                        github="https://github.com/jirath-arn/Wong_Wian_Yai.git"
                        type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Twitter clone full-stack"
                        img={project2}
                        summary="Built Twitter clone (React, Tailwind, Next, Prisma, Mongo, NextAuth) funtionality: Authentication system, Notification system,Image Upload using Base64 strings,Prisma ORM with MongoDB,Responsive Layout,
                            1 To Many Relations (User - Post),
                            Many To Many Relations (Post - Comment),
                            Following functionality,
                            Comments / Replies,
                            Likes functionality,
                            Vercel Deployment"
                        link="https://twittercloneforeducation-ap38atjap-jayun-o.vercel.app"
                        github="https://github.com/jayun-o/twitter-clone"
                        type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Cryptocurrency App(Kotlin/Jetpack compose)"
                        img={project3}
                        summary={`Built a Cryptocurrency App in Kotlin using Jetpack compose, Koin to handler Dependency injection
                            The app will list the top 100 cryptocurrencies with their prices and trends, featuring a detail screen with animations and a custom graph. The app is designed to be responsive, working on various screen sizes and orientations.
                            It uses Material 3 theming with dynamic colors, adjusting to the device's background color. 
                            The tech stack includes Koin for dependency injection, Ktor client for network requests, KotlinX serialization for JSON parsing, and Jetpack Compose for UI building. 
                            focus on modern Android app development, addressing common questions about state management, architecture patterns, and library choices
                            The CoinCap API will be used for data, chosen for its lack of authentication requirements and the material theme was generated using Google's official color generator.`
                            .split('\n')
                            .map((line, index) => (
                                <React.Fragment key={index}>
                                    {line.trim()}
                                    <br />
                                </React.Fragment>
                            ))}

                        link="https://github.com/jayun-o/CryptoTracker"
                        github="https://github.com/jayun-o/CryptoTracker"
                        type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Dictionary App(Kotlin/Jetpack compose)"
                            img={project4}
                            summary={`Building a clean architecture dictionary app using MVVM, Dagger Hilt, Retrofit, and Kotlin, covering essential coding practices and UI development.
                                Highlights:
                                🛠️ Clean Architecture: Learn to structure app for scalability and maintainability.
                                🔌 Dependency Injection: Use Dagger Hilt for efficient dependency management.
                                🌐 API Integration: Set up Retrofit for seamless data fetching from external sources.
                                📦 Data Handling: Understand data transfer objects (DTOs) and mapping to domain models.
                                📲 User Interface: Create a responsive UI with text fields and icons for an enhanced user experience.
                                ⚙️ Error Management: Implement error handling and state management using Kotlin coroutines and Flow.
                                📂 Open Source Access: Project code available on GitHub for further exploration and learning.
                                Key Insights:
                                🏗️ MVVM Design Pattern: Emphasizing separation of concerns, the MVVM pattern helps in managing UI-related data in a lifecycle-conscious way, enhancing app responsiveness.
                                🧩 Dagger Hilt Benefits: Dagger Hilt simplifies dependency injection, making the code cleaner and easier to manage while promoting better testing practices.
                                🔄 Retrofit for Networking: Utilizing Retrofit enables efficient HTTP requests and responses, handling multiple API interactions seamlessly.
                                📊 DTO to Domain Mapping: Properly mapping DTOs to domain models is crucial for maintaining a clear data flow and ensuring data integrity throughout the app.
                                🎨 UI Development: Crafting a visually appealing UI with thoughtful layout design enhances usability and engagement, essential for user satisfaction.
                                🔍 Search Functionality: Implementing robust search features improves user experience by allowing quick access to word definitions and related information.
                                📈 Best Practices: Following coding standards and best practices not only improves code readability but also aids in long-term maintenance and collaboration among developers.`
                                .split('\n')
                                .map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            link="https://github.com/jayun-o/Dictionary-App.git"
                            github="https://github.com/jayun-o/Dictionary-App.git"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Bookpedia App(Kotlin/Jetpack compose/Kotlin multiplatform)"
                            img={project5}
                            summary={`Building a “book pedia” app for Android, iOS, and desktop.
                                Highlights
                                📱 Cross-Platform Development: building apps for Android, iOS, and desktop using Compose Multiplatform.
                                🔄 App Features: The “book pedia” app includes API integration, local database usage, animations, and navigation.
                                🏗️ Clean Architecture: Emphasizes the separation of presentation, domain, and data layers for maintainable code.
                                🌐 Ktor 3.0: New features in Ktor enhance networking capabilities for Compose Multiplatform applications.
                                🎨 UI Design: Demonstrates structuring the UI for the book list screen with reusable components.
                                ⚙️ Dependency Injection: Highlights the use of Koin for managing dependencies in Kotlin Multiplatform projects.
                                Key Insights
                                🌍 Multiplatform Strategy: Building a cross-platform app showcases the versatility of Compose Multiplatform, allowing developers to reach users on various devices seamlessly.
                                🔍 Robust App Features: Integrating a remote API and local database enhances the app’s functionality, providing users with a rich experience while searching for books.
                                🏗️ Architectural Best Practices: Implementing clean architecture by separating concerns allows for better maintainability, making it easier to update and scale the app.
                                🚀 Networking Enhancements: Ktor 3.0 introduces significant improvements for networking in apps, streamlining API calls and data handling.
                                🎨 Reusable Components: Structuring the UI with reusable components fosters better organization and testing practices, leading to a more robust application.
                                🔗 Effective Dependency Management: Using Koin for dependency injection simplifies managing dependencies, making the codebase more flexible and easier to maintain.`
                                .split('\n')
                                .map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            link="https://github.com/jayun-o/Bookpedia.git"
                            github="https://github.com/jayun-o/Bookpedia.git"
                            type="Featured Project"
                        />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Todo App(Kotlin/Jetpack compose/Kotlin multiplatform)"
                            img={project6}
                            summary={`Build a basic to-do app for Android and iOS using Compose Multiplatform and MongoDB Realm for local database integration.
                                        Highlights
                                        📱 Build a to-do app for both Android and iOS.
                                        📦 Use Compose Multiplatform for shared UI.
                                        🗂️ Integrate MongoDB Realm as a local database.
                                        🎨 Create custom Material 3 themes.
                                        🔄 Implement navigation with Voyager library.
                                        🖥️ Manage tasks with a ViewModel and state handling.
                                        ✔️ Test and debug on Android and iOS simulators.
                                        Key Insights
                                        📚 Cross-Platform Development: Using Compose Multiplatform allows developers to share UI code between Android and iOS, boosting efficiency and reducing redundancy. This approach is ideal for maintaining consistency across platforms.
                                        🔒 Local Database with MongoDB Realm: MongoDB Realm offers a robust solution for mobile data persistence, providing seamless integration for both Android and iOS applications. It simplifies data management and enhances performance.
                                        🎨 Custom Theming: Customizing Material 3 colors allows for a tailored user experience, ensuring that the app aligns with branding and design aesthetics while keeping the interface modern and attractive.
                                        🔄 Effective Navigation: Implementing the Voyager library for navigation simplifies the process of moving between screens, offering smooth transitions and an intuitive user experience, essential for mobile applications.
                                        📊 State Management: Utilizing a ViewModel to manage application state ensures that the UI responds dynamically to data changes, improving user engagement and usability while maintaining a clean architecture.
                                        ⚙️ Testing on Multiple Platforms: Testing applications on both Android and iOS simulators guarantees functionality across devices, identifying platform-specific issues before deployment.
                                        🛠️ Future Enhancements: There’s potential for further improvements in error handling and user feedback, enhancing the app’s usability and robustness, which is crucial for professional applications.`
                                .split('\n')
                                .map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            link="https://github.com/jayun-o/Todo-App.git"
                            github="https://github.com/jayun-o/Todo-App.git"
                            type="Featured Project"
                        />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Starbucks App (Kotlin Multiplatform / Compose Multiplatform)"
                                img={project7}
                                summary={`Developed a full-featured cross-platform Starbucks E-commerce application using Kotlin Multiplatform and Jetpack Compose Multiplatform, sharing the entire UI layer across Android and iOS.
                                    The app follows a Clean, Multi-modular Architecture with the MVVM pattern for scalability and maintainability.
                                    Implemented Firebase Authentication for Email/Password and Google Sign-In, Cloud Firestore for real-time data, Firebase Storage for product images, and Cloud Functions for automated order confirmation emails.
                                    Integrated PayPal API and Pay on Delivery options for checkout, along with push notifications powered by Firebase Cloud Messaging (FCM).
                                    Includes an Admin Panel for product management (CRUD operations) and dynamic Material 3 theming.
                                    Focused on building a production-ready, modern, scalable E-commerce solution with real-world architecture and Firebase backend integration.`  
                                    .split('\n')
                                    .map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line.trim()}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                link="https://github.com/jayun-o/starbucks-jetpack-compose.git"
                                github="https://github.com/jayun-o/starbucks-jetpack-compose.git"
                                type="Featured Project"
                            />
                        </div>
                    </div>
            </Layout>
        </main>
    </>
  )
}

export default projects