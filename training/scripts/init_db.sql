

insert into place_entity (id, name, address, city) values ('f318790d-5502-4e16-9d6b-67a5b4619e97', 'La Loma del Lobo', 'Circular 50A' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');
insert into place_entity (id, name, address, city) values ('8a0f1396-391d-404d-b1ef-febb03783d68', 'Dos Quebradas', 'Calle 55 # 32c-22' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');
insert into place_entity (id, name, address, city) values ('321763af-6d18-4c93-b084-16e92a0aaba4', 'Cerro Volador', 'Calle 20A #54-101' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');
insert into place_entity (id, name, address, city) values ('40aff7fc-57a3-4eca-86d5-92440e570438', 'La Casa del Lobo', 'Circular 1' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');
insert into place_entity (id, name, address, city) values ('0f470772-ae41-4c2b-93f6-027d2024c11e', 'Donde Elena', 'Carrera 33 #85-27' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');
insert into place_entity (id, name, address, city) values ('090c4b11-e436-4072-aae5-15a72cb9b30d', 'Gym La 80', 'Carrera 80 #22-27' , 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');

/*actividades ciclismo*/
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('a05c8127-4439-4c01-99f3-231241826387', 'Subir la loma', 'training', '¡Sube la loma a todo gas!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', '2ceafa81-c69a-4e89-878a-8306d2efd256', 'f318790d-5502-4e16-9d6b-67a5b4619e97');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('ba75e576-3d4f-43c3-832d-c5786643f602', 'La Loma Lena', 'training', 'Baja la loma lentamente.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', '2ceafa81-c69a-4e89-878a-8306d2efd256', '8a0f1396-391d-404d-b1ef-febb03783d68');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('cf05be36-d383-4f27-bf48-0adbdf8b2879', 'En bajada', 'training', 'Rutina de recuperacion', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', '2ceafa81-c69a-4e89-878a-8306d2efd256', '8a0f1396-391d-404d-b1ef-febb03783d68');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('a4fe73fc-9f23-414d-b187-1d73ce8cf651', 'A todo gas', 'training', '¡Sube la loma a todo gas!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', '2ceafa81-c69a-4e89-878a-8306d2efd256', 'f318790d-5502-4e16-9d6b-67a5b4619e97');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('3b8cdb29-ca1d-4783-9b32-f6d8755c33c9', 'La ruta peligrosa', 'training', 'Aumenta y reduce la marcha frecuentemente', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', '2ceafa81-c69a-4e89-878a-8306d2efd256', '321763af-6d18-4c93-b084-16e92a0aaba4');

/*actividades indor_training*/
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('448f60f6-cde3-4c47-a5a7-4e1d31207f82', 'Rutina de Pecho', 'training', 'Tonifica tus pectorales', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('1f7c45ef-af11-4063-b05c-1db6d598cd7c', 'Rutina de Espalda', 'training', 'Para incrementar el volumen de tu espalda', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('ccc9c9f5-324a-4623-8e2b-c32251cfd5d7', 'Rutina de Hombro', 'training', 'Fortalece tus hombros para reducir el riesgo de leción.', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('43a3f620-3fac-46fc-8422-0950340e79e9', 'Rutina de Piernas', 'training', 'Para el fortaliecimiento de las piernas.', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364','090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('5528fe32-5ea3-4b19-b84a-43d434950506', 'Rutina de abdomen', 'training', 'Para tener un abdomen plano y libre de grasa.', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', '090c4b11-e436-4072-aae5-15a72cb9b30d');

/*actividades any*/
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('917248cf-e605-466f-a8b5-0e43acb3c412', 'Rutina de Pecho Recargada', 'training', 'Tonifica tus pectorales', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', 'e6089868-0a23-40fd-9e4d-93c7cae07745', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('6aac6cf0-9858-4ad6-8c20-96dcafc4f470', 'Rutina de Espalda Recargado', 'training', 'Para incrementar el volumen de tu espalda', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', 'e6089868-0a23-40fd-9e4d-93c7cae07745', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('4741c667-a2b6-4277-ac39-c37fc56b6bf3', 'Rutina de Piernas Recargado', 'training', 'Para el fortaliecimiento de las piernas.', 'https://st2.depositphotos.com/3386033/5304/i/450/depositphotos_53041219-stock-photo-modern-gym-interior-with-various.jpg', 5400, '08:00', 'e6089868-0a23-40fd-9e4d-93c7cae07745', '090c4b11-e436-4072-aae5-15a72cb9b30d');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('4b84de4a-1ad6-4f5a-be4c-056f1f23a291', 'A todo gas', 'training', '¡Sube la loma a todo gas!', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', 'e6089868-0a23-40fd-9e4d-93c7cae07745', 'f318790d-5502-4e16-9d6b-67a5b4619e97');
insert into activity_entity (id, name, type, description, image, duration, start_at, sport, "placeId") values ('5c8a7211-d7fe-4e21-9649-c94adf437cf7', 'La ruta peligrosa', 'training', 'Aumenta y reduce la marcha frecuentemente', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fciclismo%2F&psig=AOvVaw1lTfHrf0exvnFssaMPPFm0&ust=1666647460392000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMiSkOCn9_oCFQAAAAAdAAAAABAE', 5400, '08:00', 'e6089868-0a23-40fd-9e4d-93c7cae07745', '321763af-6d18-4c93-b084-16e92a0aaba4');

/*template sport cicling*/
insert into template_training_plant_entity (id, sports, "profileDescription", city) values ('ff5a05f9-7200-4fbf-a8df-3d909d3fd518', '2ceafa81-c69a-4e89-878a-8306d2efd256', 'Ejercicios para los ciclistas', 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');

insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('f47a5a89-e049-4a04-955c-f2ea623872ba', 1, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('043dd030-2ead-4b89-90e8-5a58f14dbbf8', 2, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('67542f62-fd3d-488f-a405-1c2300aa133c', 3, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('abc90fd1-789a-4f44-9e69-d03f76800f4c', 4, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('8febf1ee-de21-4b0d-87b1-2aef88c43c5e', 5, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('81d78690-0c5a-44b7-9898-f8eeb09d109c', 6, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('26762956-1e44-4b4f-9488-354e62fc01ee', 7, 'ff5a05f9-7200-4fbf-a8df-3d909d3fd518');

insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('f47a5a89-e049-4a04-955c-f2ea623872ba', 'a05c8127-4439-4c01-99f3-231241826387');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('043dd030-2ead-4b89-90e8-5a58f14dbbf8', 'ba75e576-3d4f-43c3-832d-c5786643f602');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('67542f62-fd3d-488f-a405-1c2300aa133c', 'cf05be36-d383-4f27-bf48-0adbdf8b2879');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('abc90fd1-789a-4f44-9e69-d03f76800f4c', 'a4fe73fc-9f23-414d-b187-1d73ce8cf651');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('8febf1ee-de21-4b0d-87b1-2aef88c43c5e', '3b8cdb29-ca1d-4783-9b32-f6d8755c33c9');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('81d78690-0c5a-44b7-9898-f8eeb09d109c', 'a05c8127-4439-4c01-99f3-231241826387');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('26762956-1e44-4b4f-9488-354e62fc01ee', 'ba75e576-3d4f-43c3-832d-c5786643f602');

/*template sport any*/
insert into template_training_plant_entity (id, sports, "profileDescription", city) values ('e7f29b8e-2abf-4318-9461-5b4b81018478', 'e6089868-0a23-40fd-9e4d-93c7cae07745', 'Para cualquier deportista', 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');

insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('1b79b21d-66ec-4b0d-8c86-e015bf937b6a', 1, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('c371e422-a2e7-4e46-8573-a4a0e1b5d19d', 2, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('875a0d3b-9bee-474a-aff8-a9b465a387d1', 3, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('b86157f8-502b-48a4-b53a-156973a9f5de', 4, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('95b50623-5f5a-4621-9af8-b87a02bb1639', 5, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('bea85208-e74a-4466-a402-e611bf9a45d3', 6, 'e7f29b8e-2abf-4318-9461-5b4b81018478');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('bd6cc55f-0135-4f8b-84bd-58bdf886a2e0', 7, 'e7f29b8e-2abf-4318-9461-5b4b81018478');

insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('1b79b21d-66ec-4b0d-8c86-e015bf937b6a', '917248cf-e605-466f-a8b5-0e43acb3c412');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('c371e422-a2e7-4e46-8573-a4a0e1b5d19d', '6aac6cf0-9858-4ad6-8c20-96dcafc4f470');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('875a0d3b-9bee-474a-aff8-a9b465a387d1', '4741c667-a2b6-4277-ac39-c37fc56b6bf3');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('b86157f8-502b-48a4-b53a-156973a9f5de', '4b84de4a-1ad6-4f5a-be4c-056f1f23a291');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('95b50623-5f5a-4621-9af8-b87a02bb1639', '5c8a7211-d7fe-4e21-9649-c94adf437cf7');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('bea85208-e74a-4466-a402-e611bf9a45d3', '4b84de4a-1ad6-4f5a-be4c-056f1f23a291');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('bd6cc55f-0135-4f8b-84bd-58bdf886a2e0', '5c8a7211-d7fe-4e21-9649-c94adf437cf7');

/*template sport indor_training*/
insert into template_training_plant_entity (id, sports, "profileDescription", city) values ('c256ba6d-8350-422f-bc64-ec641dfa31f1', '61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', 'Ejercicios Indor', 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');

insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('a633be39-e540-4f96-8e57-d12d171b6589', 1,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('9bfd00a0-711a-40f4-9c17-e181707d6ca9', 2,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('b6ae5f8f-1aa0-4c4e-bbc0-03f72c355d46', 3,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('a9bba431-44de-4a11-9004-8e08fbe91980', 4,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('3b061d73-84c9-4c4d-858c-f44bd5656293', 5,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('d480e53f-f11f-4b55-b952-407420700466', 6,'c256ba6d-8350-422f-bc64-ec641dfa31f1');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('c5990f04-3826-4ddf-aafe-0a51c7c60f16', 7,'c256ba6d-8350-422f-bc64-ec641dfa31f1');

insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('a633be39-e540-4f96-8e57-d12d171b6589','448f60f6-cde3-4c47-a5a7-4e1d31207f82');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('9bfd00a0-711a-40f4-9c17-e181707d6ca9','1f7c45ef-af11-4063-b05c-1db6d598cd7c');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('b6ae5f8f-1aa0-4c4e-bbc0-03f72c355d46','ccc9c9f5-324a-4623-8e2b-c32251cfd5d7');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('a9bba431-44de-4a11-9004-8e08fbe91980','43a3f620-3fac-46fc-8422-0950340e79e9');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('3b061d73-84c9-4c4d-858c-f44bd5656293','5528fe32-5ea3-4b19-b84a-43d434950506');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('d480e53f-f11f-4b55-b952-407420700466','448f60f6-cde3-4c47-a5a7-4e1d31207f82');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('c5990f04-3826-4ddf-aafe-0a51c7c60f16','1f7c45ef-af11-4063-b05c-1db6d598cd7c');

/*template sport cicling y indor_training*/
insert into template_training_plant_entity (id, sports, "profileDescription", city) values ('34202f08-49cf-4093-923d-9ae4c016c234', '2ceafa81-c69a-4e89-878a-8306d2efd256|61e5bad4-137a-4ebd-a5bb-1d7d12bc5364', 'Ejercicios Mixtos de ciclismo y indor training', 'ddd7c109-f46d-464b-9b60-f20bee9f07f4');

insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('a6fc3e77-9401-4387-b768-90692af0ab81', 1,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('52475efc-063b-48c1-8c90-a4d6075c7709', 2,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('137e358f-7340-4efe-adda-d32048376c45', 3,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('f87c1c68-cade-4170-aa97-b2348c8a9db4', 4,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('dc4e491d-439c-4ce7-8537-278e451a785c', 5,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('174f0cf8-6d3e-4200-9057-21444eda14ff', 6,'34202f08-49cf-4093-923d-9ae4c016c234');
insert into template_trainig_day_entity (id, day, "templateTrainingPlantId") values ('d214f684-ab90-4d59-9b78-d4fd43b757e1', 7,'34202f08-49cf-4093-923d-9ae4c016c234');

insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('a6fc3e77-9401-4387-b768-90692af0ab81', 'a05c8127-4439-4c01-99f3-231241826387');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('52475efc-063b-48c1-8c90-a4d6075c7709', 'ba75e576-3d4f-43c3-832d-c5786643f602');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('137e358f-7340-4efe-adda-d32048376c45', 'cf05be36-d383-4f27-bf48-0adbdf8b2879');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('f87c1c68-cade-4170-aa97-b2348c8a9db4', 'a4fe73fc-9f23-414d-b187-1d73ce8cf651');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('dc4e491d-439c-4ce7-8537-278e451a785c', '448f60f6-cde3-4c47-a5a7-4e1d31207f82');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('174f0cf8-6d3e-4200-9057-21444eda14ff', '1f7c45ef-af11-4063-b05c-1db6d598cd7c');
insert into template_trainig_day_entity_activities_activity_entity ("templateTrainigDayEntityId", "activityEntityId") values ('d214f684-ab90-4d59-9b78-d4fd43b757e1', 'ccc9c9f5-324a-4623-8e2b-c32251cfd5d7');