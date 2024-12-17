export class Tag {
    readonly tagId?: number;
    readonly title: string;
    readonly description: string;

    constructor(tag: { tagId?: number; title: string; description: string; }) {
        this.validate(tag)
        this.tagId = tag.tagId
        this.title = tag.title
        this.description = tag.description
    }

    validate(tag: { tagId?: number; title: string; description: string; }) {
        if (!tag.title || tag.title.length ===0) {
            throw new Error("Title is required");
        }

        if (tag.title.length < 3) {
            throw new Error ("Title must be at least 3 characters long");
        }

        if (!tag.description || tag.description.length === 0) {
            throw new Error("Description is required");
        }

        if (tag.description.length < 10) {
            throw new Error("Description must be at least 10 characters long")
        }
    }

    getTagId() {
        return this.tagId;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    equals(tag: Tag): boolean {
        return (
            this.tagId === tag.getTagId() &&
            this.title === tag.getTitle() &&
            this.description === tag.getDescription()
        );
    }
}