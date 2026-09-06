import {Child}  from '../../domain/index';
export default interface ChildRepository {
    save (child: Child ): Promise<string>;
}