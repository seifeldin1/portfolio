import { Button, Card, CardContent, Typography , Grid } from "@mui/material";
import styles from "../../styles/Projects.module.css";


const Projects = () => {
  const projectData = [
    {
      title: "Palestine Donation Website",
      date:"May 2024 - May 2024",
      description:
        "The project was to design a donation website for palestine where we get from the user all necessary details and payement amounts. It was assumed that the organization is in Egypt so the payement options were having options that are valid only in Egypt. Payments are not yet activated because it was required not to take money. The website conatct other tabs like About Us , Contact Us and Events.",
      githubLink: "https://github.com/seifeldin1/Palestine-Donation-FrontEnd", 
      deployedLink: "https://seifeldin1.github.io/Palestine-Donation-FrontEnd/",
    },
    {
      title: "Gym Hub",
      date:"Nov 2024 - Feb 2025",
      description:
        "This is a website that have 4 users (Clients , Coaches , Branch Managers and Owners).It is done to help in saving time for clients and to help managers and owners to manage the gym in a better way",
      githubLink: "https://github.com/seifeldin1/portfolio", 
      deployedLink: null,
    },
    {
      title: "Portfolio",
      date:"Feb 2025 - Now",
      description:
        "This is my own portfolio",
      githubLink: "https://github.com/seifeldin1/portfolio", 
      deployedLink: null,
    },
    {
      title: "Simple Express App",
      date:"May 2024 - May 2024",
      description:
        "This is a simple express app that displays the name , skills , age and graduation state of the user",
      githubLink: "https://github.com/seifeldin1/Simple-Express-App", 
      deployedLink: null,
    },
    {
      title: "Weather App",
      date:"May 2024 - May 2024",
      description:
        "The user should enter a valid longitude and lattitude and the weather app tells him the weather at that location using API.",
      githubLink: "https://github.com/seifeldin1/Weather-App", 
      deployedLink: "https://seifeldin1.github.io/Weather-App/",
    },
    {
      title: "Drag Ronaldo",
      date:"Apr 2024 - Apr 2024",
      description:
        "This website is designed where you can drag the picture of Cristiano Ronaldo while you are holding the mouse and when you stop holding , the picture remains at its position.",
      githubLink: "https://github.com/seifeldin1/Drag-Ronaldo", 
      deployedLink: "https://seifeldin1.github.io/Drag-Ronaldo/",
    },
    {
      title: "Dynamic List Website",
      date:"Apr 2024 - Apr 2024",
      description:
        "This website is designed where the user add items to the lists and it is shown directly in the web page highlighted with a color, only gives error if the user tried to click on add with entering any item",
      githubLink: "https://github.com/seifeldin1/Dynamic-List", 
      deployedLink: "https://seifeldin1.github.io/Dynamic-List/",
    },
    {
      title: "Restaurant Menu",
      date:"Apr 2024 - Apr 2024",
      description:
        "This is a sample of a restaurant menu.",
      githubLink: "https://github.com/seifeldin1/Restaurant-Menu-Sample", 
      deployedLink: "https://seifeldin1.github.io/Restaurant-Menu-Sample/",
    },
    {
      title: "Website Using Iframes",
      date:"Apr 2024 - Apr 2024",
      description:
        "This website is designed where you can navigate through 3 websites: IEEE CUSB , CUFE Portal , Youtube Video using iframes.",
      githubLink: "https://github.com/seifeldin1/Iframes-Website", 
      deployedLink: "https://seifeldin1.github.io/Iframes-Website/",
    },
    {
      title: "Flowchart Simulator",
      date: "Nov 2023 - Dec 2023",
      description:
        "This was a simulator done using c++ programming language, where the user implements a flowchart, and the user can run and simulate the flowchart that he has created.It had two modes , design mode and run mode. There were many features in the design mode such as copy , paste ,delete , add a conditional statement , add an assignment statement , add a start and end statements , undo , redo , save , load , add a connector , switch to run mode and exit. For the run mode there was compile line by line and run the whole code and debug.",
      githubLink: null, 
      deployedLink: null, 
    },
    {
      title: "List Of Hospitals In Egypt",
      date: "May 2024 - May 2024",
      description:
        "The project was to check if the user account is authenticated or not and if it is authenticated then the user can view the list of hospitals in egypt using an API."
+"This website was designed using css, react.js and javascript."
+"After clicking on login ==> click on return back to homepage and you will find the option to go to see hospitals list available for you only if you have entered the correct username and password (if hospital lists page says loading , that's because this API takes some time to fetch the data). But if you have entered a wrong username or password then an error message will be displayed and if you clicked on the return to homepage you will find that it is written that user is not authenticated and the option to visit hosptials list page will not be available.\n"
+"The accounts are:\n"
+"username: seif , password:1220246\n"
+"username: shahd , password:1220242\n"
+"username: malak , password:1220265\n"
+"username: sarah , password:1220659\n"
+"username: mazen , password:1220269\n",
      githubLink: "https://github.com/seifeldin1/Hospitals-In-Egypt-For-Verified-Accounts", 
      deployedLink: "https://seifeldin1.github.io/Hospitals-In-Egypt-For-Verified-Accounts/", 
    },
    {
      title: "Alien Invasion",
      date:"Mar 2024 - May 2024",
      description:
        "This was a game that is simulated through the Microsoft Visual Studio C++ compiler , it was my data structures and algorithms subject's project for this semester (spring 2024). The game is about a fight between earth and alien armies where aliens are trying to invade earth. The game displays the fight that is running base on the input ranges for health , power , attack capacity and other inputs ,these inputs are taken as ranges and then at every timestep , there is a random generator that generates a number and according to this number it generates units of diffrent types (earth tanks , earth soldiers , earth gunneries , alien soldiers , alien drones and alien monsters).The attack logic is then applied and the same progressis done again until either there is a winner or we reached a 500 timestep then we check the number of units for each army and based on that we get the winner. We used stacks , queues , priority queues , bags and dequeues as the data structures while making the game. We also used c++ as the programming language.",
      githubLink: null,
      deployedLink: null, 
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-8">
      <Typography variant="h3" className="p-8 text-center text-yellow-200" sx={{color:"e6e600"}}>
        My Projects
      </Typography>

      <Grid container spacing={4} alignItems="flex-start">
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card  sx={{
                borderRadius: 2,
                boxShadow: 3,
                m: 2,
                backgroundColor: "#e6e600"
              }}>
              <CardContent>
                {/* Project Title */}
                <Typography variant="h5" component="div" className="font-bold">
                  {project.title}
                </Typography>

                {/* Project Date */}
                <Typography variant="body2" color="textSecondary" className="text-gray-400 mt-2">
                  {project.date}
                </Typography>

                {/* Project Description */}
                <Typography variant="body2" color="#696969" className="text-gray-400 mt-2">
                  {project.description.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Typography>
              </CardContent>

              <div className="p-4 flex justify-end space-x-4">
                {project.githubLink && (
                  <Button
                    variant="contained"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color:"#e6e600",
                      backgroundColor: "#000000", 
                      "&:hover": { backgroundColor: "#e6e600" , color:"#000000"}, 
                    }}
                  >
                    GitHub
                  </Button>
                )}
                {project.deployedLink && (
                  <Button
                    variant="contained"
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color:"#e6e600",
                      backgroundColor: "#000000", 
                      "&:hover": { backgroundColor: "#e6e600" , color:"#000000"}, 
                    }}
                  >
                    Visit Website
                  </Button>
                )}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;