---
layout: blog
title: 'Building Scalable APIs with Node.js and TypeScript'
excerpt: 'Learn how to create robust, type-safe APIs using Node.js, TypeScript, and modern best practices for scalable backend development.'
publishedAt: '2024-12-10'
tags: ['Node.js', 'TypeScript', 'API', 'Backend']
category: 'tutorial'
featured: true
author:
  name: 'Binsar Jr'
  avatar: '/avatar.jpg'
  bio: 'Full Stack Developer & Technical Writer'
---

# Building Scalable APIs with Node.js and TypeScript

When building modern web applications, having a robust and scalable API is crucial. In this guide, I'll show you how to create production-ready APIs using Node.js and TypeScript.

## Why TypeScript for APIs?

TypeScript provides several advantages for API development:

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Documentation**: Types serve as living documentation
- **Maintainability**: Easier to refactor and maintain large codebases

## Project Setup

Let's start by setting up a new TypeScript project:

```bash
mkdir scalable-api
cd scalable-api
npm init -y
npm install express cors helmet morgan compression
npm install -D typescript @types/node @types/express ts-node nodemon
```

## Type-Safe Request Handling

Here's how to create type-safe route handlers:

```typescript
import { Request, Response, NextFunction } from 'express';

interface CreateUserRequest {
	name: string;
	email: string;
	password: string;
}

interface UserResponse {
	id: string;
	name: string;
	email: string;
	createdAt: Date;
}

export const createUser = async (
	req: Request<{}, UserResponse, CreateUserRequest>,
	res: Response<UserResponse>,
	next: NextFunction
) => {
	try {
		const { name, email, password } = req.body;

		// Validation
		if (!name || !email || !password) {
			return res.status(400).json({
				error: 'Missing required fields'
			});
		}

		// Create user logic here
		const user = await userService.create({ name, email, password });

		res.status(201).json({
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: user.createdAt
		});
	} catch (error) {
		next(error);
	}
};
```

## Error Handling

Implement centralized error handling:

```typescript
import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
	statusCode: number;
	isOperational: boolean;

	constructor(message: string, statusCode: number, isOperational = true) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;

		Error.captureStackTrace(this, this.constructor);
	}
}

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof ApiError) {
		return res.status(error.statusCode).json({
			status: 'error',
			message: error.message
		});
	}

	// Log unexpected errors
	console.error('Unexpected error:', error);

	res.status(500).json({
		status: 'error',
		message: 'Internal server error'
	});
};
```

## Validation Middleware

Create reusable validation middleware:

```typescript
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req.body);

		if (error) {
			return res.status(400).json({
				status: 'error',
				message: error.details[0].message
			});
		}

		next();
	};
};

// Usage
const createUserSchema = Joi.object({
	name: Joi.string().min(2).max(50).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required()
});

app.post('/users', validate(createUserSchema), createUser);
```

This approach ensures your APIs are type-safe, maintainable, and scalable from day one.
