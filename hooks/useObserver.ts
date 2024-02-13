

const projectsObserver = ( ) => {
    
    if (typeof window !== 'undefined') {

        // animate projects
        const projects = document.querySelectorAll(".projects");
        const projectsObserver = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {

                    const forProjects = async () => {
                        const wait = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

                        for (let index = 0; index < projects[0].children.length; index++) {
    
                            projects[0].children[index].classList.replace("translate-y-6", "translate-y-0");
                            projects[0].children[index].classList.replace("opacity-0", "opacity-100");
                            await wait(300);   
                        }
                    }
                    forProjects();
                    projectsObserver.unobserve(entry.target);
                }
            })
        }, {threshold: 0.3} );
        projects.forEach( about => {
            projectsObserver.observe(about);
        })
    }
    
}

export const fadeObserver = () => {

    //animate fade
    if (typeof window !== 'undefined') {
        const titles = document.querySelectorAll(".fade");
        const titleObserver = new IntersectionObserver( entries => {
            entries.forEach( entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.replace("-translate-y-4", "translate-y-0");
                    entry.target.classList.replace("translate-x-8", "translate-x-0");
                    entry.target.classList.replace("translate-y-6", "translate-x-0");
                    entry.target.classList.replace("opacity-0", "opacity-100");
                    titleObserver.unobserve(entry.target);
                }
            })
        }, {threshold: 0.5} );
        titles.forEach( title => {
            titleObserver.observe(title);
        })
    }
}

export const barObserver = () => {
    //animate title bar
    
    if (typeof window !== 'undefined') {

        const bars = document.getElementsByClassName("bar") as HTMLCollection;
    
        const config = {
            rootMargin: '-40px 0px -50px 0px',
            threshold: 1
        };

        const barObserver = new IntersectionObserver( entries => {

            // bars.forEach( bar => {
            //     bar.style.width = '0px'
            // })
            
            entries.forEach( entry => {
                
                // @ts-ignore: Unreachable code error
                entry.target.style.width = '0px';

                if(entry.isIntersecting) {
                    // @ts-ignore: Unreachable code error
                    entry.target.style.width = '100px';

                    // barObserver.unobserve(entry.target);
                }
            })
        }, config );

        for (let index = 0; index < bars.length; index++) {
            barObserver.observe(bars[index]);
        }
    }
}


export default projectsObserver