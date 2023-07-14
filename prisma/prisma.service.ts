import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient()

import { OnModuleInit } from '@nestjs/common';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    

    async onModuleInit() {
        await this.$connect;
    }

    async onModuleDestroy(){
        await this.$disconnect
    }

}
