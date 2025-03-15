import './style/Education.css'

function Formation({school, diploma, begining, ending, description}) {
    return (
      <div>
        <h2>{school}</h2>
        <p>{diploma}</p>
        <p>{begining} - {ending}</p>
        <p>{description}</p>
      </div>
    )
}

function Education() {

    return(
        <>
            <h1>Education</h1>

            <formations>
                <Formation school={'Lycée Bellevue'}
                                   diploma={'Baccalauréat général'}
                                   begining={'2020'} ending={'2023'}
                                   description={'Maths Physique'} />
                <Formation school={'EPFL'}
                           diploma={'Bachelor en Systèmes de Communication'}
                           begining={'2023'} ending={'2027'}
                           description={'Informatique, Mathématiques, Physique'} />
            </formations>

        </>
    )
}

export default Education;