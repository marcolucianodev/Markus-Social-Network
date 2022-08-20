import { 
  AutoButton,
  AutoNavigation,
  Label,
  ManualNavigation,
  SlideImage,
  SlideItems,
  SliderContainer, 
  Slides 
} from "./styles";
import imgSlider1 from "../../components/_assets/img/img-testes/slider-1.jpg"
import imgSlider2 from "../../components/_assets/img/img-testes/slider-2.jpg"
import imgSlider3 from "../../components/_assets/img/img-testes/slider-3.jpg";


const Slider = () => {
  return (
    <SliderContainer>

      {/* Define tamanho da área onde vai conter o conteúdo do slider (midia/texto) */}
      <Slides>
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <SlideItems className="first">
          <SlideImage src={imgSlider1} alt="Slider1" />
        </SlideItems>
        <SlideItems>
          <SlideImage src={imgSlider2} alt="Slider2" />
        </SlideItems>
        <SlideItems>
          <SlideImage src={imgSlider3} alt="Slider3" />
        </SlideItems>

        {/* Navegação onde define os checked quando cada slide estiver ativo */}
        <AutoNavigation>
          <AutoButton className="btn-auto1"></AutoButton>
          <AutoButton className="btn-auto2"></AutoButton>
          <AutoButton className="btn-auto3"></AutoButton>
        </AutoNavigation>
      </Slides>

      {/* Div responsável por criar os bullets de navegação dos slides */}
      <ManualNavigation>
        <Label htmlFor="radio1"></Label>
        <Label htmlFor="radio2"></Label>
        <Label htmlFor="radio3"></Label>
      </ManualNavigation>
    </SliderContainer>
  )
}

export default Slider;