import Animation from "@/components/common/Animation";
import { shouldShowSpline } from "@/lib/should-show-spline";

export const IAAnimation = async () => {
  const showSpline = await shouldShowSpline();

  return (
    <div className="lg:h-[60rem] flex justify-center items-center">
      <div className="lg:absolute left-1/2 transform -translate-x-1/2 w-full">
        {showSpline && (
          <Animation
            height="60rem"
            scene="https://prod.spline.design/uWqID-6dp1DQg86Z/scene.splinecode"
          />
        )}
      </div>
    </div>
  );
};
