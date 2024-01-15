import { describe, test, expect, vi } from 'vitest';
import { fetchAllUsersFromDB } from '../users.controllers';
import prisma from '../../db/__mocks__/database';

vi.mock('../../db/database');

describe("User controller", () => {
    describe("fetchAllUsersFromDB", () => {
        test("Should return correct payload", async () => {
            const mockUsers = { id: 1, email: 'foo@bar.biz', name: "Foo Bar" }
            prisma.user.findMany.mockResolvedValue([mockUsers])

            prisma.user.findMany();

            const users = await fetchAllUsersFromDB();

            expect(users).toHaveLength(1);
        });
    });
});