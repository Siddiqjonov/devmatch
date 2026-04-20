import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }

    // GET /profiles
    @Get()
    findAll(@Query('location') location: string) {
        return this.profilesService.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.findOne(id);
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    // PUT /profiles/:id
    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profilesService.update(id, updateProfileDto);
    }

    // DELETE /profilers/:id
    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseUUIDPipe) id: UUID) {
        this.profilesService.remove(id);
    }
}
