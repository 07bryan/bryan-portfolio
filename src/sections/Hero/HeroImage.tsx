import javaImage from "../../assets/images/javaImage.jpg";

function HeroImage() {
    return (
        <div className="relative flex items-center justify-center">
            <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

            <div className="relative flex h-[450px] w-[350px] items-center justify-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

                <img
                    src={javaImage}
                    alt="Bryan Ortiz"
                    className="h-full w-full object-cover"
                />

            </div>
        </div>
    );
}

export default HeroImage;