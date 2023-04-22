import { Template } from '../../../components/common/template';
import Tracks from '../../../components/tracks';

export default function Loading() {
    return (
        <Template isLoading>
            <Tracks isLoading />
        </Template>
    );
}
