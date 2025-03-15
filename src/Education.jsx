import './style/Education.css'
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <>
            <h1>{t('Education')}</h1>

            <formations>
                <Formation school={'Lycée Bellevue, Albi'}
                                   diploma={'Baccalauréat général'}
                                   begining={'2020'} ending={'2023'}
                                   description={t('highschooldesc')} />
                <Formation school={'EPFL'}
                           diploma={t('bsc')}
                           begining={'2023'} ending={'2027'}
                           description={t('bscdesc')} />
            </formations>

        </>
    )
}

export default Education;