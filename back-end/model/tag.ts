import { Tag as TagPrisma } from '@prisma/client';

export class Tag {
    private id?: number;
    private title: string;
    private description: string;

    constructor(tag: {
        id?: number;
        title: string;
        description: string;
    }) {
        this.validate(tag)

        this.id = tag.id;
        this.title = tag.title;
        this.description = tag.description;
    };

    validate(tag: { id?: number; title: string; description: string; }) {
        if (!tag.title || tag.title.length ===0) {
            throw new Error("Title is required");
        }

        if (tag.title.length < 3) {
            throw new Error ("Title must be at least 3 characters long");
        }

        if (!tag.description || tag.description.length === 0) {
            throw new Error("Description is required");
        }

        if (tag.description.length < 3) {
            throw new Error("Description must be at least 3 characters long")
        }
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    equals(tag: Tag): boolean {
        return (
            this.id === tag.getId() &&
            this.title === tag.getTitle() &&
            this.description === tag.getDescription()
        );
    }

    static from({ id, title, description }: TagPrisma) {
        return new Tag({
            id,
            title,
            description,
        });
    };
}