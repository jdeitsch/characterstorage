import React from "react";
import pure from "recompose/pure";
import SvgIcon from '@material-ui/core/SvgIcon';

let BardIcon = (props) => (
    <SvgIcon {...props} viewBox='0 0 512 512'>
        <path d="M108.656 35.063c-15.053.138-33.413 5.378-46.97 15.812-10.75 8.276-18.777 19.27-21.186 34.438.21-.126.414-.252.625-.376-.843 2.816-1.313 5.786-1.313 8.876 0 17.087 13.85 30.937 30.938 30.937 14.293 0 26.324-9.705 29.875-22.875.028-.115.067-.23.094-.344.48-2.082.768-4.042.905-5.843.025-.327.017-.65.03-.968.005-.126.03-.25.032-.376.007-.182-.002-.353 0-.53 0-1.526-.098-3.036-.312-4.5-1.367-8.018-6.778-12.156-12.594-13.72-8.527-2.293-19.055.637-23.75 18.156l-.468-.125C62.04 74.12 72.213 63.885 83.94 60.78c2.476-.654 5.053-1.005 7.656-.968 9.072.13 18.445 4.88 24.562 17.126.087.173.165.355.25.53 5.208 15.233 2.11 43.32-3.344 57.626-7.288 18.753-22.376 40.504-47.687 65.5C6.99 258.252 4 329.824 39.97 388.814 75.936 447.8 152.13 493.56 254.437 493.56c102.306 0 178.47-45.76 214.437-104.75 35.882-58.848 32.982-130.225-25-187.812l-.406-.406h-.033c-25.31-24.996-40.367-46.747-47.656-65.5-5.23-16.453-9.09-42.988-2.655-57.625.058-.128.128-.25.188-.376.025-.05.037-.106.062-.156 6.117-12.246 15.49-16.996 24.563-17.126 2.602-.037 5.18.314 7.656.97 11.724 3.102 21.87 13.337 19.344 32.843l-.438.125c-4.694-17.52-15.222-20.45-23.75-18.156-4.41 1.185-8.603 3.85-10.97 8.562-.012.04-.017.085-.03.125-.975 3.007-1.5 6.203-1.5 9.532 0 17.088 13.85 30.938 30.938 30.938 17.087 0 30.937-13.85 30.937-30.938 0-4.355-.907-8.49-2.53-12.25-3.058-13.244-10.598-23.112-20.44-30.687-14.458-11.13-34.39-16.363-49.936-15.78-13.378.5-24.85 4.108-33.22 10.53-3.412 2.617-6.383 5.702-8.844 9.375-69.455 35.508-138.89 38.75-208.344-7.75-.642-.557-1.29-1.105-1.968-1.625-8.37-6.422-19.843-10.03-33.22-10.53-.97-.037-1.964-.042-2.968-.032zm52.78 53.124c6.338 2.648 12.666 4.987 19 7.032v313.06c-30.732-8.258-57.886-22.005-77.374-41.31-17.1-16.94-28.077-38.626-28.906-63.595-.828-24.97 8.274-52.702 28.97-82.625 41.323-59.752 57.163-103.6 58.31-132.563zm186.033 1.407c1.6 28.97 17.593 72.37 58.25 131.156 20.693 29.923 29.796 57.656 28.967 82.625-.828 24.97-11.807 46.654-28.906 63.594-19.023 18.846-45.374 32.4-75.217 40.717V94.844c5.636-1.606 11.27-3.35 16.906-5.25zm-35.595 10v312.53c-8.21 1.63-16.606 2.878-25.125 3.782V104.094c8.376-1.122 16.75-2.63 25.125-4.5zm-112.75.78c8.45 1.97 16.894 3.442 25.344 4.44v311.342c-8.59-.84-17.057-2.05-25.345-3.625V100.376zm68.938 5.564v311.375c-4.54.198-9.088.312-13.657.312-3.76 0-7.506-.053-11.25-.188V106.28c8.293.314 16.614.18 24.906-.343z" />
    </SvgIcon>
);

BardIcon = pure(BardIcon);
BardIcon.displayName = "Bard";
BardIcon.muiName = "SvgIcon";

export default BardIcon;