export enum UserRole {
    admin = "admin",
    editor = "editor",
    guest = "guest",
}
type roleType = Record<UserRole, string>;

const RoleDescription: roleType = {
    admin: "Admin User",
    editor: "Editor User",
    guest: "Guest User",
};

export {};