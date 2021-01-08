# #FROM mcr.microsoft.com/dotnet/core/sdk:3.0
# #ARG source
# WORKDIR /inetpub/wwwroot
# #COPY ./bin/Release/PublishOutput/  ${source:-obj/Docker/publish}
# #RUN ["dotnet","build"]
# EXPOSE 80/tcp
# COPY . /app
# #WORKDIR /app
# RUN dotnet publish -c Release -o pub
# #RUN ["dotnet", "restore"]
# #RUN ["dotnet", "build"]
# RUN dotnet build 
# ENTRYPOINT ["dotnet", "QLNV_1.dll"]

FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /app

COPY . /app
RUN ["dotnet", "restore"]
RUN ["dotnet" , "build"]
# COPY . ./
# RUN dotnet publish -c Release -o out

# #Run phase
# FROM mcr.microsoft.com/dotnet/core/aspnet:3.1

# WORKDIR /app
# EXPOSE 80
# COPY --from=build /app/out .

ENTRYPOINT [ "dotnet","Run" ]