import Image, { ImageProps } from "next/image";
import path from "path";

type Props = ImageProps & {
    webp?: boolean;
    avif?: boolean;
};
export const Picture = ({ avif = true, webp = true, className, ...props }: Props) => {
    const { src } = props;
    const baseName = path.basename(src.toString());
    const ext = path.extname(baseName);
    const srcAvif = avif && src.toString().replace(baseName, `-lights-/${baseName.replace(ext, ".avif")}`);
    const srcWebp = webp && src.toString().replace(baseName, `-lights-/${baseName.replace(ext, ".webp")}`);
    return (
        <picture className={className}>
            {srcAvif && <source srcSet={srcAvif} />}
            {srcWebp && <source srcSet={srcWebp} />}
            <Image {...props} alt="" />
        </picture>
    )
}