import { html } from 'hono/html';

export const home = html`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Hono Tailwind No Build</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Hono Tailwind No Build">
            <meta name="author" content="Your Mom">
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <div class="grid min-h-screen w-full grid-cols-[300px_1fr] bg-gray-100 dark:bg-gray-950">
                <div class="flex flex-col border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <div class="flex items-center gap-4">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
                        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                    </span>
                    <div class="grid gap-1">
                        <h3 class="text-lg font-semibold">John Doe</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Student, Computer Science</p>
                    </div>
                    </div>
                    <div class="mt-8 grid gap-4">
                    <div class="grid gap-1">
                        <p class="text-sm font-medium">Personal Information</p>
                        <div class="grid grid-cols-[100px_1fr] gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <p>Date of Birth:</p>
                        <p>1998-05-15</p>
                        <p>ID Card:</p>
                        <p>AB123456</p>
                        <p>Student ID:</p>
                        <p>12345678</p>
                        <p>Email:</p>
                        <p>john.doe@example.com</p>
                        <p>Phone:</p>
                        <p>+1 (555) 123-4567</p>
                        <p>Year/Level:</p>
                        <p>3rd Year</p>
                        <p>Specialization:</p>
                        <p>Computer Science</p>
                        <p>Group:</p>
                        <p>A</p>
                        </div>
                    </div>
                    <div class="grid gap-1">
                        <p class="text-sm font-medium">Actions</p>
                        <div class="grid gap-2">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            Update Profile
                        </button>
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            Secure Messaging
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6 p-6">
                    <div class="grid grid-cols-[1fr_1fr] gap-6">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Schedule</h3>
                        </div>
                        <div class="p-6">
                        <div class="aspect-[4/3]">
                            <div style="width: 100%; height: 100%;"></div>
                        </div>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Add Module</h3>
                        </div>
                        <div class="p-6 space-y-4">
                        <div class="grid gap-2">
                            <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="module"
                            >
                            Module
                            </label>
                            <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="module"
                            placeholder="Enter module name"
                            />
                        </div>
                        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Add Module
                        </button>
                        </div>
                    </div>
                    </div>
                    <div class="grid grid-cols-[1fr_1fr] gap-6">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Final Project</h3>
                        </div>
                        <div class="p-6 space-y-4">
                        <div class="grid gap-2">
                            <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="project"
                            >
                            Project Title
                            </label>
                            <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="project"
                            placeholder="Enter project title"
                            />
                        </div>
                        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Add Project
                        </button>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Proposed Topics</h3>
                        </div>
                        <div class="p-6">
                        <div class="grid gap-4">
                            <div class="grid gap-1">
                            <p class="text-sm font-medium">Artificial Intelligence in Healthcare</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Proposed by Prof. Samantha Williams</p>
                            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                                View Topic
                            </button>
                            </div>
                            <div class="grid gap-1">
                            <p class="text-sm font-medium">Blockchain for Supply Chain Optimization</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Proposed by Prof. Michael Johnson</p>
                            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                                View Topic
                            </button>
                            </div>
                            <div class="grid gap-1">
                            <p class="text-sm font-medium">Sustainable Energy Solutions</p>
                            <p class="text-sm text-gray-500 dark:text-gray-400">Proposed by Prof. Sarah Lee</p>
                            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                                View Topic
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="grid grid-cols-[1fr_1fr] gap-6">
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Project Status</h3>
                        </div>
                        <div class="p-6">
                        <div class="grid gap-4">
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Artificial Intelligence in Healthcare</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Added
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Blockchain for Supply Chain Optimization</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Topic Assigned
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Sustainable Energy Solutions</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Pending
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                            Administrative Requests
                        </h3>
                        </div>
                        <div class="p-6">
                        <div class="grid gap-4">
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Add Module</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Pending
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Add Final Project</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Approved
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Change Specialization</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Rejected
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Request Motivation Letter</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Pending
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Request Exam Regrading</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Approved
                            </div>
                            </div>
                            <div class="grid grid-cols-[1fr_auto] items-center gap-2">
                            <p class="text-sm font-medium">Request Information</p>
                            <div class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                Pending
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`
