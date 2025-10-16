import { Flex, Button, Upload, type UploadFile } from "antd"
import { DownloadOutlined, ImportOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { exportDB } from 'dexie-export-import'
import { db } from '@shared/config/dbConfig'
import download from 'downloadjs'
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import dayjs from 'dayjs'
type FileList = Array<UploadFile<any>>

const JSON_FILE_TYPE = 'application/json'

export const DbImportExport = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [fileList, setFileList] = useState<FileList>([])

    const onImport = async (fileList: FileList) => {        
        const targetFile = fileList[0]
        const file = targetFile?.originFileObj
        if (targetFile.type === JSON_FILE_TYPE && file) {
            setIsLoading(true)
            try {
                await db.open()
                await db.import(file, {
                    clearTablesBeforeImport: true
                })
                location.reload()
            } catch(err) {
                console.log(err)
                toast.error(ERROR_DEFAULT)
                setIsLoading(false)
            }
        } else {
            toast.error(ERROR_DEFAULT)
        }
    }

    const onExport = async () => {
        setIsLoading(true)
        try {
            const blob = await exportDB(db, {
                prettyJson: true
            })
            download(blob, `database_${dayjs().format('DD.MM.YYYY')}.json`, JSON_FILE_TYPE);
        } catch (error) {
            toast.error(ERROR_DEFAULT)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (fileList.length === 0) return
        onImport(fileList)
    }, [fileList])


    return (
        <Flex gap={5}>
            <Upload
                multiple={false}
                fileList={fileList}
                showUploadList={false}
                onChange={e => {
                    setFileList(e.fileList);
                }}
            >
                <Button
                    disabled={isLoading || fileList.length > 0}
                    variant={'outlined'}

                >
                    <ImportOutlined />
                    Täze bazany giriz
                </Button>
            </Upload>

            <Button
                loading={isLoading}
                disabled={isLoading}
                variant={'outlined'}
                onClick={onExport}
            >
                <DownloadOutlined />
                Bazany ýükle
            </Button>
        </Flex>

    )
}