import Link from 'next/link'
import projectsData from '../../public/assets/projects.json';
import styles from './ProjectsList.module.scss';


export default async function Page() {

    const project = projectsData.projects.en;

    return (
        <div className={styles.projectsListPage}>
            <div className={styles.projectsListContent}>
                {project.map((project) => (
                    <div className={styles.projectsListCards}>
                    <Link key={project.id} href={`/projects/${project.id}`} passHref>
                        <img src={project.img[0].src} alt={project.img[0].title} className={styles.projectImg} />
                        <h2 className={styles.projectsListTitle}>{project.name}</h2>
                    </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}