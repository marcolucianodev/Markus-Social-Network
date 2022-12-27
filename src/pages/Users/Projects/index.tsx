import React, { useContext } from "react";
import { 
    Project, 
    ProjectCategory, 
    ProjectContent, 
    ProjectDescription, 
    ProjectHead, 
    ProjectInfo, 
    ProjectLink, 
    ProjectTags, 
    ProjectTagsItems, 
    ProjectTemplate, 
    ProjectTitle, 
    ProjectType, 
    UserSectionTitle 
} from "../styles";

import { FaFolderOpen, FaTags, FaLink } from "react-icons/fa";
import { UserContext } from "../../../contexts/userContext";
import { useParams } from "react-router-dom";

const Projects = () => {

    const { user }: any = useContext(UserContext);

    const { id }: any = useParams();

    const tags = user.map((item: any) => item.project.projectTags)
    
    const projectData = [];
    for(let i in user) {
        projectData.push(
            <Project>
                <UserSectionTitle><FaFolderOpen /> Projetos</UserSectionTitle>
                <ProjectContent>
                    <ProjectTemplate 
                        templateCover={user[i].project.projectImage}
                    />
                    <ProjectInfo>
                        <ProjectHead>
                            <ProjectType>Projeto Destaque</ProjectType>
                            <ProjectTitle>
                                {user[i].project.projectName}
                            </ProjectTitle>
                            <ProjectCategory>
                                <FaTags /> {user[i].project.projectCategory}
                            </ProjectCategory>
                            {user[i].project.projectUrl &&
                                <ProjectLink>
                                    <FaLink /> <span>{user[i].project.projectUrl}</span>
                                </ProjectLink>
                            }
                        </ProjectHead>
                        <ProjectDescription>
                            {user[i].project.projectDesc}
                        </ProjectDescription>
                        <ProjectTags>                            
                            <ProjectTagsItems><span className="hastag">#</span> {tags[id][0]}</ProjectTagsItems>
                            <ProjectTagsItems><span className="hastag">#</span> {tags[id][1]}</ProjectTagsItems>
                            <ProjectTagsItems><span className="hastag">#</span> {tags[id][2]}</ProjectTagsItems>
                        </ProjectTags>
                    </ProjectInfo>
                </ProjectContent>
            </Project>
        )
    }

    return (
        <>{projectData[id]}</>
    )
}

export default Projects;