import { Child } from '../../../domain/child/entities';
export default interface ChildRepository {
    save (child: Child ): Promise<string>;
}